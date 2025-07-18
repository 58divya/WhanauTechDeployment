import os

basedir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key_here')

    ENV = os.getenv('FLASK_ENV', 'production')

    if ENV == 'production':
        db_path = os.path.abspath(os.path.join(basedir, 'app', 'database', 'whanau.db'))
    else:
        db_path = os.path.abspath(os.path.join(basedir, 'backend', 'database', 'whanau.db'))

    SQLALCHEMY_DATABASE_URI = f"sqlite:///{db_path}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
