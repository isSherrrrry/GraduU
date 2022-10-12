import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO posts (title, username, university, content) VALUES (?, ?, ?, ?)",
            ('First Post', 'Janna', 'GMU', 'An application was made')
            )

cur.execute("INSERT INTO posts (title, username, university, content) VALUES (?, ?, ?, ?)",
            ('Second Post', 'Sebastian', 'Emory', 'No clue how I got in')
            )

connection.commit()
connection.close()