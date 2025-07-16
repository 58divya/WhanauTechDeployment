import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS


def create_app():
    # Create Flask app and set React build folder as static folder
    app = Flask(__name__, static_folder="static/build", static_url_path="")

    # Enable CORS for local dev and deployed frontend domains
    CORS(app, origins=["http://localhost:3000", "https://whanautech.onrender.com"])

    # API route example
    @app.route("/api/hello")
    def hello():
        return jsonify(message="Hello from the backend!")

    # Serve React static files and index.html for all other routes
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_react(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            # Serve index.html for React Router to handle routing
            return send_from_directory(app.static_folder, "index.html")

    return app
