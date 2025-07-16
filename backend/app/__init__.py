import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

def create_app():
    app = Flask(__name__, static_folder="static/build", static_url_path="")

    CORS(app, origins=["http://localhost:3000", "https://whanautech.onrender.com"])

    @app.route("/api/hello")
    def hello():
        return jsonify(message="Hello from the backend!")

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve(path):
        file_path = os.path.join(app.static_folder, path)
        if path != "" and os.path.exists(file_path):
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, "index.html")

    return app
