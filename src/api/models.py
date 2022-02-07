from flask_sqlalchemy import SQLAlchemy
# from sqlachemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

class User(db.Model):
    # __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    lastname = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    home_phone = db.Column(db.String(20), unique=False, nullable=True)
    mobile_phone = db.Column(db.String(20), unique=True, nullable=False)
    address = db.Column(db.String(240), unique=False, nullable=False)
    zip_code = db.Column(db.String(20), unique=False, nullable=False)
    years_of_residence = db.Column(db.String(20), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "home phone": self.home_phone,
            "mobile phone": self.mobile_phone,
            "address": self.address,
            "zip code": self.zip_code,
            "years of residence": self.years_of_residence,
            # do not serialize the password, its a security breach
        }


class Proposal(db.Model):
    # __tablename__ = 'proposal'
    id = db.Column(db.Integer, primary_key=True)
    # proponent = db.Column(db.String, db.ForeignKey(User.name))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    area = db.Column(db.String(20), unique=False, nullable=False)
    proposal_type = db.Column(db.String(20), unique=False, nullable=False)
    date = db.Column(db.String, unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    documents = db.Column(db.String(120), unique=False, nullable=False)
    document_type = db.Column(db.String(20), unique=False, nullable=False)
    document_description = db.Column(db.String(1000), unique=False, nullable=True)
    contact_by = db.Column(db.String(20), unique=False, nullable=False)
    confirmation_by = db.Column(db.String(20), unique=False, nullable=False)

    def __repr__(self):
        return '<Proposal %r>' % self.user_id

    def serialize(self):
        return {
            "id": self.id,
            "user_id" : self.user_id,
            "area": self.area,
            "proposal type": self.proposal_type,
            "date": self.date,
            "description": self.description,
            "documents": self.documents,
            "document type": self.document_type,
            "document description": self.document_description,
            "contact by": self.contact_by,
            "confirmation by": self.confirmation_by,
            # do not serialize the password, its a security breach
        }