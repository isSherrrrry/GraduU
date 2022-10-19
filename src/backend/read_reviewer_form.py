from flask import request, render_template, redirect
from flask import current_app as app

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return "val"
    elif request.method == 'GET':
        return "temp text"