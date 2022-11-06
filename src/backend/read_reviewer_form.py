from flask import request, render_template, redirect
from flask import current_app as app

@app.route("/")
def index():
    return 'temp'

@app.route("/submit", methods=['GET', 'POST'])
def update_database():
    data = request.get_json()
    return None