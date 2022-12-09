##The entry script for the Flask server. This script starts the server.

from backend import create_app

app = create_app()

if __name__ == "__main__":
    #app.run('0.0.0.0', debug=False, port=5000)

    app.run('0.0.0.0', debug=False, port=3389)
