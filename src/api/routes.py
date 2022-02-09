"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Proposal
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#User endpoints

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
    new_user = User(name= request_body["name"], lastname= request_body["lastname"], email= request_body["email"], home_phone= request_body["home phone"], mobile_phone= request_body["mobile phone"], address= request_body["address"], zip_code= request_body["zip code"], years_of_residence= request_body["years of residence"], password= request_body["password"])
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

#Proposals endpoints

@api.route('/proposal', methods=['GET'])
def get_proposals():
    proposals = Proposal.query.all()
    all_proposals = list(map(lambda x: x.serialize(), proposals))
    return jsonify(all_proposals), 200

@api.route('/proposal/<int:id>', methods=['GET'])
def get_one_proposal(id):
    proposal_x = Proposal.query.get(id)
    if proposal_x is None:
        return 'Proposal not found', 404
    else:
        return jsonify(proposal_x.serialize()), 200

@api.route('/proposal', methods=['POST'])
def create_proposal():
    request_body = request.get_json()
    new_proposal = Proposal(area= request_body["area"], proposal_type= request_body["proposal type"], date= request_body["date"], description= request_body["description"], documents= request_body["documents"], document_type= request_body["document type"], document_description= request_body["document description"], contact_by= request_body["contact by"], confirmation_by= request_body["confirmation by"])
    db.session.add(new_proposal)
    db.session.commit()
    return jsonify(request_body), 201

@api.route('/proposal/<int:id>', methods=['DELETE'])
def delete_proposal(id):
    proposal_x = Proposal.query.get(id)
    if proposal_x is None:
        return 'Proposal not found', 404
    else:
        db.session.delete(proposal_x)
        db.session.commit()
        return jsonify("Proposal deleted"), 200

#Token

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test@test.com" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)