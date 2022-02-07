"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Proposal
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def get_one_user(id):
    user_x = User.query.get(id)
    if user_x is None:
        return 'User not found', 404
    else:
        return jsonify(user_x.serialize()), 200

@api.route('/user', methods=['POST'])
def create_users():
    request_body = request.get_json()
    new_user = User(name= request_body["name"], lastname= request_body["lastname"], email= request_body["email"], home_phone= request_body["home phone"], mobile_phone= request_body["mobile phone"], address= request_body["address"], zip_code= request_body["zip_code"], years_of_residence= request_body["years_of_residence"], password= request_body["password"], is_active= request_body["is_active"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(request_body), 201

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_x = User.query.get(id)
    if user_x is None:
        return 'User not found', 404
    else:
        db.session.delete(user_x)
        db.session.commit()
        return jsonify("User deleted"), 200