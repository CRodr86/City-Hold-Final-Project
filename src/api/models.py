from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    lastname = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    home_phone = db.Column(db.String(20), unique=False, nullable=True)
    mobile_phone = db.Column(db.String(20), unique=True, nullable=False)
    address1 = db.Column(db.String(240), unique=False, nullable=True)
    address2 = db.Column(db.String(240), unique=False, nullable=True)
    zip_code = db.Column(db.String(20), unique=False, nullable=False)
    years_of_residence = db.Column(db.String(20), unique=False, nullable=False)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    proposals = db.relationship('Proposal')
    

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "home_phone": self.home_phone,
            "mobile_phone": self.mobile_phone,
            "address1": self.address1,
            "address2": self.address2,
            "zip_code": self.zip_code,
            "years_of_residence": self.years_of_residence,
            # do not serialize the password, its a security breach
        }


class Proposal(db.Model):
    __tablename__ = 'proposal'
    id = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String(20), unique=False, nullable=False)
    proposal_type = db.Column(db.String(20), unique=False, nullable=False)
    date = db.Column(db.DateTime, unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    documents = db.Column(db.String(120), unique=False, nullable=False)
    document_type = db.Column(db.String(20), unique=False, nullable=False)
    document_description = db.Column(db.String(1000), unique=False, nullable=True)
    contact_by = db.Column(db.String(20), unique=False, nullable=False)
    confirmation_by = db.Column(db.String(20), unique=False, nullable=False)
    proponent_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  

    # def __repr__(self):
    #     return '<Proposal %r>' % self.user_id

    def serialize(self):
        return {
            "id": self.id,
            "area": self.area,
            "proposal_type": self.proposal_type,
            "date": self.date,
            "description": self.description,
            "documents": self.documents,
            "document_type": self.document_type,
            "document_description": self.document_description,
            "contact_by": self.contact_by,
            "confirmation_by": self.confirmation_by,
            "proponent_id" : self.proponent_id,
            # "proponent" : self.proponent,
            # do not serialize the password, its a security breach
        }