import os
from flask import Flask, send_from_directory
# from flask_cors import CORS

from app.extensions import db, mail, jwt
from app.routes.contact import contact_bp
from app.routes.advisors import advisors_bp
from app.routes.chatbot import chatbot_bp


def create_app():
    # Path to React build folder relative to this file
    frontend_path = os.path.join(os.path.dirname(__file__), '..', 'build')

    print("Frontend path:", frontend_path)
    print("Index exists:", os.path.exists(os.path.join(frontend_path, "index.html")))

    app = Flask(
        __name__,
        static_folder=frontend_path,
        static_url_path='/'
    )

    print("Flask root_path:", app.root_path)

    # Correct absolute path to SQLite database
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'database'))
    db_path = os.path.join(base_dir, 'whanau.db')
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{db_path}"

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "your_secret_key")
    app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY", "your_jwt_secret_key")

    # Correct CORS origins - frontend URLs that will request your backend
    # CORS(app, resources={
    #     r"/api/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:5000"]},
    #     r"/static/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:5000"]}
    # }, supports_credentials=True)

    # Initialize extensions
    db.init_app(app)
    mail.init_app(app)
    jwt.init_app(app)

    # Register blueprints
    app.register_blueprint(contact_bp)
    app.register_blueprint(advisors_bp)
    app.register_blueprint(chatbot_bp)

    # Create database tables (if not already created)
    with app.app_context():
        db.create_all()

    # Serve static images from backend/app/static/images
    @app.route('/static/images/<path:filename>')
    def serve_image(filename):
        # app.root_path points to backend/app
        image_dir = os.path.join(app.root_path, 'static', 'images')
        print(f"Serving image {filename} from {image_dir}")
        try:
            return send_from_directory(image_dir, filename)
        except Exception as e:
            print(f"Error serving image: {str(e)}")
            return {"error": "File not found"}, 404


    # Serve React frontend for all other routes (SPA support)
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react(path):
        if path != '' and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, 'index.html')


    # Optional test route
    @app.route('/test')
    def test():
        return 'Test route is working!'

    return app
