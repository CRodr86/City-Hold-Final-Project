"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Proposal
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash


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
    firstName, lastName, email, password, homePhone, mobilePhone, address1, address2, zipCode, yearsOfResidence = request.json.get(
        "name" , None
    ), request.json.get(
        "lastname", None
    ), request.json.get(
        "email", None
    ), request.json.get(
        "password", None
    ), request.json.get(
        "homePhone", None
    ), request.json.get(
        "mobilePhone", None
    ), request.json.get(
        "address1", None
    ), request.json.get(
        "address2", None
    ), request.json.get(
        "zipCode", None
    ), request.json.get(
        "yearsOfResidence", None
    )
    # encriptar contraseña
    # comprobar contraseña
    if check_password_hash(password, passwordDB):
        # generas token
        access_token = create_access_token(identity=email)
        return  jsonify({"token": access_token})
    else:
        return jsonify({"message": "Password doesn't match"}), 500

#  generar hash
        passwordHashed = generate_password_hash(password)
        new_user = User(name= firstName, lastname= lastName, email= email, password= password, home_phone= homePhone,  mobile_phone= mobilePhone, address1= address1, address2= address2, zip_code= zipCode, years_of_residence= yearsOfResidence)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize()), 201

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

@api.route('/proposalofuser/<int:proponent_id>', methods=['GET'])
def get_user_proposal(proponent_id):
    proposal_x = Proposal.query.get(proponent_id)
    if proposal_x is None:
        return 'User does not have any proposals', 404
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
    user = User.query.filter_by(email=email, password=password).first()
    if user != None:
        access_token = create_access_token(identity= user.id)
        return jsonify({"token": access_token, "user": user.id})
    else:
        return jsonify({"msg": "Bad email or password"}), 401
        

#     # comprobar contraseña
# if check_password_hash(password, passwordDB):
#   # generas token
# else:
#   return jsonify({'message': 'Password doesn't match'}), 500

# # generar hash
# passwordHashed = generate_password_hash(password)