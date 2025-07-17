# advisors.py (Flask Blueprint for Advisor Listing and Booking)

from flask import Blueprint, jsonify, request
from app.extensions import db, mail
from app.models import Booking , Advisor
from dateutil import parser
from flask_mail import Message


advisors_bp = Blueprint('advisors', __name__, url_prefix='/api')


# Endpoint: Get advisor list from DB
@advisors_bp.route('/advisors', methods=['GET'])
def get_advisors():
    print("GET /api/advisors called")
    advisor_list = Advisor.query.all()
    result = [
        {
            "id": advisor.id,
            "name": advisor.name,
            "photo_url": advisor.photo_url,
            "expertise": advisor.expertise
        }
        for advisor in advisor_list
    ]
    return jsonify(result)

# Endpoint: Get advisor by ID from DB
@advisors_bp.route('/advisors/<int:advisor_id>', methods=['GET'])
def get_advisor_by_id(advisor_id):
    advisor = Advisor.query.get(advisor_id)
    if advisor is None:
        return jsonify({"error": "Advisor not found"}), 404
    return jsonify({
        "id": advisor.id,
        "name": advisor.name,
        "photo_url": advisor.photo_url,
        "expertise": advisor.expertise
    })

# Endpoint: Book an appointment
@advisors_bp.route('/book', methods=['POST'])
def book_appointment():
    data = request.get_json()
    advisor_id = data.get('advisor_id')
    user_name = data.get('user_name')
    user_email = data.get('user_email')
    dt_str = data.get('datetime')

    if not all([advisor_id, user_name, user_email, dt_str]):
        return jsonify({"error": "Missing required fields"}), 400

    advisor = Advisor.query.get(advisor_id)
    if advisor is None:
        return jsonify({"error": "Advisor not found"}), 404
    
    advisor_name = advisor.name

    try:
        dt = parser.parse(dt_str)
        new_booking = Booking(
            advisor_id=advisor.id,
            advisor_name=advisor.name,
            user_name=user_name,
            user_email=user_email,
            datetime=dt,
            date=dt.strftime('%Y-%m-%d'),
            time=dt.strftime('%H:%M')
        )
        db.session.add(new_booking)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Database error. Please try again later."}), 500

    # Send confirmation email
    try:
        msg = Message(
            subject='WhānauTech Appointment Confirmation',
            recipients=[user_email],
            body=f"""
Kia ora {user_name},



Thank you for booking a tech consultation with WhānauTech.

🗓️ Appointment Details:
Advisor: {advisor_name}
Date & Time: {dt.strftime('%A %d %B %Y at %I:%M %p')}

If you have any questions, feel free to reply to this email.

Ngā mihi nui,  
The WhānauTech Team
"""
        )
        mail.send(msg)
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

    return jsonify({"message": f"Appointment booked with {advisor_name} for {user_name}."}), 200

# Endpoint: Get booked times for specific advisor/date
@advisors_bp.route('/booked_slots', methods=['GET'])
def get_booked_slots():
    date = request.args.get('date')
    advisor_id = request.args.get('advisor_id', type=int)

    if not date or not advisor_id:
        return jsonify({'error': 'Date and advisor_id parameters are required'}), 400

    bookings = Booking.query.filter_by(date=date, advisor_id=advisor_id).all()
    booked_times = [booking.time for booking in bookings]

    return jsonify({'booked_times': booked_times})
