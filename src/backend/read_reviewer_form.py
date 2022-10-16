from flask import request
from flask import current_app as app

@app.route("/submit")
def read_input():
    major = request.form.get('major')
    return major
