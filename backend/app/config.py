import os
from dotenv import load_dotenv

load_dotenv()

# Go up two directories from config.py to reach 'backend' folder
basedir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'super-secret')
    
    # Database path: backend/database/whanau.db
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        'sqlite:///' + os.path.join(basedir, 'database', 'whanau.db')
    )
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'super-secret-jwt')

    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = MAIL_USERNAME
