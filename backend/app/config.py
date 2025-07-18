# config.py
import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key_here')

    # Use absolute path for SQLite DB inside /app/data folder (make sure /app/data exists)
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        'sqlite:///' + os.path.join(basedir, 'app', 'database', 'whanau.db')
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

