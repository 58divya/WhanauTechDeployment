import os
from flask import Flask, send_from_directory
from app.extensions import db, mail, jwt
from app.routes.contact import contact_bp
from app.routes.advisors import advisors_bp
from app.routes.chatbot import chatbot_bp
from app.config import Config

def create_app():
    # Backend root directory (one level up from this file)
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

    # React frontend build folder under backend/build
    frontend_path = os.path.join(base_dir, 'build')
    print("Frontend path:", frontend_path)
    print("Index exists:", os.path.exists(os.path.join(frontend_path, "index.html")))

    app = Flask(
        __name__,
        static_folder=frontend_path,
        static_url_path='/'  # serve React static files from root URL
    )
    print("Flask root_path:", app.root_path)

    # Load config
    app.config.from_object(Config)

    # Ensure the database directory exists (e.g., backend/database)
    db_dir = os.path.join(base_dir, 'database')
    if not os.path.exists(db_dir):
        os.makedirs(db_dir, exist_ok=True)
        print(f"Created missing database directory at {db_dir}")

    print("Database URI:", app.config['SQLALCHEMY_DATABASE_URI'])

    # Initialize Flask extensions
    db.init_app(app)
    mail.init_app(app)
    jwt.init_app(app)

    # Register blueprints
    app.register_blueprint(contact_bp)
    app.register_blueprint(advisors_bp)
    app.register_blueprint(chatbot_bp)

    # Create tables inside app context
    with app.app_context():
        db.create_all()

    # Static images route (if you have a separate static folder)
    @app.route('/static/images/<path:filename>')
    def serve_image(filename):
        image_dir = os.path.join(app.root_path, 'static', 'images')
        print(f"Serving image {filename} from {image_dir}")
        try:
            return send_from_directory(image_dir, filename)
        except Exception as e:
            print(f"Error serving image: {str(e)}")
            return {"error": "File not found"}, 404

    # Serve React frontend (handle SPA routing)
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react(path):
        requested_path = os.path.join(app.static_folder, path)
        if path and os.path.exists(requested_path):
            return send_from_directory(app.static_folder, path)
        # For all other routes, serve index.html (SPA entry point)
        return send_from_directory(app.static_folder, 'index.html')

    # Optional test route
    @app.route('/test')
    def test():
        return 'Test route is working!'

    return app
