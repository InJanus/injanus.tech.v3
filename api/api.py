from flask import Flask, jsonify, send_file
from flask_cors import CORS
import sqlite3
import io

NAME = 'injanus_tech_api'
app = Flask(NAME)
CORS(app)

filename = '../public/data/data.db'

@app.route("/api/home", methods=['GET'])
def get_home():
    return jsonify(['test','test'])

@app.route("/api/experience", methods=['GET'])
def get_experience():
    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from experience')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    myret = []
    mytemp = {}
    for myrows in cur.execute('select * from experience'):
        for columnames in mycolumnames:
            if type(myrows[mycolumnames.index(columnames)]) != bytes:
                mytemp[columnames] = myrows[mycolumnames.index(columnames)]
        myret.append(mytemp)
        mytemp = {}

    con.commit()
    con.close()
    return jsonify(myret)

@app.route("/api/experience_img/<int:pid>.png", methods=['GET'])
def get_experience_img(pid):
    con = sqlite3.connect(filename)
    cur = con.cursor()
    myimg = []
    for img in cur.execute('select img from experience'):
        myimg.append(img[0])
    con.commit()
    con.close()
    if pid >= 0 and pid <= len(myimg)-1:
        return send_file(io.BytesIO(myimg[pid]),mimetype='image/png',as_attachment=True,attachment_filename='%s.png' % pid)