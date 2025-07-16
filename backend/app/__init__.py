from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)

    CORS(app, origins=["http://localhost:3000", "https://whanautech.onrender.com"])

    @app.route("/api/hello")
    def hello():
        return {"message": "Hello from the backend!"}

    return app
