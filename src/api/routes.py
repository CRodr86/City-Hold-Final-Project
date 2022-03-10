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
from cloudinary.uploader import upload


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

@api.route('/proposalofuser', methods=['GET'])
@jwt_required()
def get_user_proposal():
    user_id = get_jwt_identity()
    print('user token', user_id)
    list_proposal = db.session.query(Proposal).filter(Proposal.proponent_id == user_id)
    # if len(list_proposal) == 0:
    #     return jsonify([]), 200
    list_propsal_json = []
    for proposal in list_proposal:
        list_propsal_json.append(proposal.serialize())
    return jsonify(list_propsal_json), 200

@api.route('/proposal', methods=['POST'])
@jwt_required()
def create_proposal():
    user_id = get_jwt_identity()
    print(user_id)
    area, proposal_type, date, description, documents, document_type, document_description, contact_by, confirmation_by = request.json.get(
        "area", None
    ), request.json.get(
        "proposal_type", None
    ), request.json.get(
        "date", None
    ), request.json.get(
        "description", None
    ), request.json.get(
        "documents", None
    ), request.json.get(
        "document_type", None
    ), request.json.get(
        "document_description", None
    ), request.json.get(
        "contact_by", None
    ), request.json.get(
        "confirmation_by", None
    )
    new_proposal = Proposal(area= area, proposal_type= proposal_type, date= date, description= description, documents= documents, document_type= document_type, document_description= document_description, contact_by= contact_by, confirmation_by= confirmation_by, proponent_id=user_id)
    db.session.add(new_proposal)
    db.session.commit()
    return jsonify(new_proposal.serialize()), 201

@api.route('/proposal/documents', methods=['POST'])
def upload_file():
    try:
        img = request.files['documents']
        body =  request.form.to_dict()
        print(img)
        print(body)
        url_img = upload(img)
        print(url_img)
        return jsonify(url_img['url'], 200)
    except Exception as error:
        print(error)
        return jsonify('algo fue mal', 500)

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
        user_json = user.serialize()
        access_token = create_access_token(identity= user.id)
        return jsonify({"token": access_token, "user": user_json })
    else:
        return jsonify({"msg": "Bad email or password"}), 401
        

#     # comprobar contraseña
# if check_password_hash(password, passwordDB):
#   # generas token
# else:
#   return jsonify({'message': 'Password doesn't match'}), 500

# # generar hash
# passwordHashed = generate_password_hash(password)

 # comprobar contraseña
    # if check_password_hash(passwordHashed):
    #     # generas token
    #     access_token = create_access_token(identity=email)
    #     return  jsonify({"token": access_token})
    # else:
    #     return jsonify({"message": "Password doesn't match"}), 500