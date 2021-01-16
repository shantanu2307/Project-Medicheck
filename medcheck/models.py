from medcheck import db
import datetime


class User(db.Model):
    __tablename__ = 'Roles'
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    company = db.Column(db.String(100))
    company_id = db.Column(db.Integer)
    role = db.Column(db.String(100))
    location = db.Column(db.String(100))
    email = db.Column(db.String(100))


class Medicine(db.Model):
    __bind_key__ = 'med'
    __tablename__ = 'Medicines'
    s_no = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    company = db.Column(db.String(100))
    company_id = db.Column(db.Integer)
    mrp = db.Column(db.Integer)
    expiry = db.Column(db.String(100))
    manu_date = db.Column(db.String(100))
    manu_location = db.Column(db.String(100))