import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS


def create_app():
    # Set up Flask app to serve from React build directory
    app = Flask(
        __name__,
        static_folder="static/build",
        static_url_path=""
    )

    # Allow CORS from local development and deployed frontend
    CORS(app, origins=[
        "http://localhost:3000",
        "https://whanautech.onrender.com"
    ])

    # API route
    @app.route("/api/hello")
    def hello():
        return jsonify(message="Hello from the backend!")

    # Serve React build (frontend)
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve(path):
        full_path = os.path.join(app.static_folder, path)
        if path != "" and os.path.exists(full_path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, "index.html")

    return app
