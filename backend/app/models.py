from app.extensions import db
from datetime import datetime, timezone

class Contact(db.Model):
    __tablename__ ='contact_records'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))

class Booking(db.Model):
    __tablename__ ='bookings'
    id = db.Column(db.Integer, primary_key=True)
    advisor_id = db.Column(db.Integer, nullable=False)
    advisor_name = db.Column(db.String(100), nullable=False)
    user_name = db.Column(db.String(100), nullable=False)
    user_email = db.Column(db.String(120), nullable=False)
    datetime = db.Column(db.DateTime, nullable=False)
    date = db.Column(db.String, nullable=False)  # 'YYYY-MM-DD'
    time = db.Column(db.String, nullable=False)  # 'HH:MM'

class Advisor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    photo_url = db.Column(db.String(200))
    expertise = db.Column(db.String(200))