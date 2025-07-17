""" ------------Contact form endpoint----------------- """

from flask import Blueprint, request, jsonify
from app.extensions import db, mail
from app.models import Contact
from flask_mail import Message
from datetime import datetime, timezone
import os
import re

contact_bp = Blueprint('contact', __name__, url_prefix='/api')

@contact_bp.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or len(name) < 2:
        return jsonify({'error': 'Kaore i te tika te ingoa. Me 2+ pūāhua.'}), 400
    if not email or not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
        return jsonify({'error': 'Kaore i te tika te īmēra.'}), 400
    if not message or len(message) < 10:
        return jsonify({'error': 'Kaore i te tika te kōrero. Me 10+ pūāhua.'}), 400

    contact_entry = Contact(name=name, email=email, message=message)
    try:
        db.session.add(contact_entry)
        db.session.commit()
    except Exception:
        db.session.rollback()
        return jsonify({'error': 'Database error: Whakamātau anō.'}), 500

    try:
        msg = Message(
            subject='New Contact Form Submission | WhānauTech',
            recipients=[os.environ.get('MAIL_USERNAME')],
            body=f'Name: {name}\nEmail: {email}\nMessage: {message}\nSubmitted: {datetime.now(timezone.utc)}'
        )
        mail.send(msg)
    except Exception as e:
        print(f"Email sending failed: {str(e)}")

    return jsonify({'message': 'Tukuna pai! Ka whakapā atu mātou ki a koe.'}), 200