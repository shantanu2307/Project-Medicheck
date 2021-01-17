import json
from flask import request, jsonify, g
from medcheck.models import User, Medicine, Info, db
from medcheck import app
import datetime
from datetime import timedelta
from block import newmedd, addretailer

# Frontend Routes


@app.route('/', methods=["GET", "POST"])
def catch():
    return app.send_static_file('index.html')


@app.route('/signup', methods=["GET", "POST"])
def catch_signup():
    return app.send_static_file('index.html')


@app.route('/login', methods=["GET", "POST"])
def catch_login():
    return app.send_static_file('index.html')


@app.route('/public', methods=["GET", "POST"])
def catch_public():
    return app.send_static_file('index.html')


@app.route('/dashboard', methods=["GET", "POST"])
def catch_dashboard():
    return app.send_static_file('index.html')


@app.route('/updateprofile', methods=["GET", "POST"])
def catch_updateprofile():
    return app.send_static_file('index.html')


@app.route('/manufacturer', methods=["GET", "POST"])
def catch_manufacturer():
    return app.send_static_file('index.html')


@app.route('/createshipment', methods=["GET", "POST"])
def catch_createshipment():
    return app.send_static_file('index.html')


@app.route('/forgotpassword', methods=["GET", "POST"])
def catch_forgotpassword():
    return app.send_static_file('index.html')

# Backend Routes


@app.route('/backend/getprofile/', methods=["GET"])
def get_profile():
    content = request.get_json()
    uid = content["uid"]
    row = User.query.filter(User.uid == uid).first()

    List = []
    Dict = {
        'uid': row.uid,
        'name': row.name,
        'role': row.role,
        'address': row.address,
        'email': row.email
    }
    List.append(Dict)
    return json.dumps(List)


@app.route('/backend/saveprofile/', methods=["POST"])
def save_profile():
    content = request.get_json()
    uid = content["uid"]
    name = content["name"]
    role = content["role"]
    email = content["email"]
    location = content["address"]

    user = User(uid=uid, name=name,
                role=role, email=email, address=location)

    db.session.add(user)
    db.session.commit()

    return 'New user added', 200


@app.route('/backend/productinfo', methods=["GET"])
def productinfo():
    content = request.get_json()
    product_id = content["product_id"]
    
    # blockchain
    

    return 'Successful', 200


@app.route('/backend/medcreate', methods=["POST", "GET"])
def medCreate():

    content = request.get_json()
    name = content["name"]
    mrp = content["mrp"]
    date = content["date"]
    expiry = content["expiry"]

    product_id = newmedd(name, mrp, expiry, date)
    product_id = str(product_id)

    List = []
    Dict = {'product_id': product_id}
    List.append(Dict)

    medicine = Medicine(product_id=product_id, name=name, mrp=mrp, date=date, expiry=expiry)

    db.session.add(medicine)
    db.session.commit()

    return json.dumps(List)


@app.route('/backend/retailer', methods=["GET", "POST"])
def retailer():

    content = request.get_json()
    uid = content["uid"]
    productid = content["product_id"]
    product_id = int(productid)
    location = content["location"]

    date = datetime.datetime.now()
    date = str(date)

    ret = Info(uid=uid, product_id=product_id, location=location, date=date)

    db.session.add(ret)
    db.session.commit()

    user = User.query.filter(User.uid == uid).first()
    name = user.name

    hexd = addretailer(product_id, date, location, name)

    List = []
    Dict = {'hex': hexd}
    List.append(Dict)

    return json.dumps(List)


# @app.route('/backend/retailerinfo', methods=["GET"])
# def retailer_info():

#     content = request.get_json()
#     uid = content["uid"]
#     product_id = content["product_id"]

#     row = Info.query.filter(
#         Info.uid == uid, Info.product_id == product_id).first()

#     List = []
#     Dict = {
#         'uid': row.uid,
#         'product_id': row.product_id,
#         'date': row.date,
#         'location': row.location
#     }
#     List.append(Dict)
#     return json.dumps(List)


@app.route('/backend/public', methods=["GET", "POST"])
def public_info():
    content = request.get_json()
    product_id = content["product_id"]

    rows = Info.query.filter(Info.product_id == product_id).all()

    List = []
    Dict = {}

    for row in rows:
        user = User.query.filter(User.uid == row.uid).first()
        Dict = {
            'name': user.name,
            'role': user.role,
            'product_id': row.product_id,
            'location': row.location,
            'date': row.date
        }
        List.append(Dict)

    return json.dumps(List)
