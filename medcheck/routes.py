import json
from flask import request, jsonify, g
from medcheck.models import User,Medicine, db
from medcheck import app

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

# Backend Routes
