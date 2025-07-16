from flask import Blueprint, jsonify

api_bp = Blueprint('api', __name__, url_prefix='/api')

@api_bp.route('/hello')
def hello():
    return jsonify(message="Hello World from Flask!")
