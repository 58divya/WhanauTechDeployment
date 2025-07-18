import os

basedir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key_here')

    ENV = os.getenv('FLASK_ENV', 'development')
    
    if ENV == 'production':
        SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app', 'database', 'whanau.db')
    else:
        SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'backend', 'database', 'whanau.db')

    SQLALCHEMY_TRACK_MODIFICATIONS = False

