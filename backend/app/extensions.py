from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_jwt_extended import JWTManager
from werkzeug.security import check_password_hash

db = SQLAlchemy()
mail = Mail()
jwt = JWTManager()