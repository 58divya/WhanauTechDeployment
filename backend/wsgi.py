from app import create_app
from dotenv import load_dotenv
from flask import Flask, send_from_directory
import os

load_dotenv()  # This loads .env automatically

app = create_app()


app = Flask(__name__, static_folder="build")

@app.route("/")
@app.route("/<path:path>")
def serve(path="index.html"):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")
