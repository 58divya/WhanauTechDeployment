import os
from flask import Flask, send_from_directory
from .extensions import db, mail, jwt
from .routes.contact import contact_bp
from .routes.advisors import advisors_bp
from .routes.chatbot import chatbot_bp
from .config import Config

def create_app():
    # Path to React build folder (relative to backend/app/__init__.py)
    frontend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'build'))
    print("Frontend path:", frontend_path)
    print("Index exists:", os.path.exists(os.path.join(frontend_path, "index.html")))

    app = Flask(
        __name__,
        static_folder=frontend_path,
        static_url_path='/'
    )
    print("Flask root_path:", app.root_path)

    # Ensure database directory exists
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'database'))
    if not os.path.exists(base_dir):
        os.makedirs(base_dir, exist_ok=True)
        print(f"Created missing database directory at {base_dir}")

    # Load config
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    mail.init_app(app)
    jwt.init_app(app)

    # Register blueprints
    app.register_blueprint(contact_bp)
    app.register_blueprint(advisors_bp)
    app.register_blueprint(chatbot_bp)

    # Create DB tables
    with app.app_context():
        db.create_all()

    # Serve static images
    @app.route('/static/images/<path:filename>')
    def serve_image(filename):
        image_dir = os.path.join(app.root_path, 'static', 'images')
        print(f"Serving image {filename} from {image_dir}")
        try:
            return send_from_directory(image_dir, filename)
        except Exception as e:
            print(f"Error serving image: {str(e)}")
            return {"error": "File not found"}, 404

    # Serve React frontend (SPA support)
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react(path):
        requested_path = os.path.join(app.static_folder, path)
        if path != '' and os.path.exists(requested_path):
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, 'index.html')

    @app.route('/test')
    def test():
        return 'Test route is working!'

    return app
