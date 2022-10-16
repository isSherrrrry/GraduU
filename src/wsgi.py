##The entry script for the Flask server. This script starts the server.

from backend import create_app

app = create_app()

if __name__ == "__main__":
    app.run()