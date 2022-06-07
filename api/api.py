from crypt import methods
from flask import Flask, jsonify, send_file, request, abort
from flask_cors import CORS
import sqlite3
import io

NAME = 'injanus_tech_api'
app = Flask(NAME)
CORS(app)

filename = '../public/data/data.db'

@app.errorhandler(505)
def databse_mismatch(e):
    return jsonify(error=str("databse mismatch of databse and query occured")), 505

@app.route("/api/home", methods=['GET'])
def get_home():
    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from home')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    myret = []
    mytemp = {}
    for myrows in cur.execute('select * from home'):
        for columnames in mycolumnames:
            if type(myrows[mycolumnames.index(columnames)]) != bytes:
                mytemp[columnames] = myrows[mycolumnames.index(columnames)]
        myret.append(mytemp)
        mytemp = {}

    con.commit()
    con.close()
    return jsonify(myret)

@app.route("/api/home_img/profile.png", methods=['GET'])
def get_home_img():
    con = sqlite3.connect(filename)
    cur = con.cursor()
    myimg = []
    for img in cur.execute('select profile_img from home'):
        myimg.append(img[0])
    con.commit()
    con.close()
    if len(myimg) == 1:
        return send_file(io.BytesIO(myimg[0]),mimetype='image/png',as_attachment=False,attachment_filename='%s.png' % 'profile')

@app.route("/api/connection_img/<int:pid>.png", methods=['GET'])
def get_connection_img(pid):
    con = sqlite3.connect(filename)
    cur = con.cursor()
    myimg = []
    first_img = 1
    for imgs in cur.execute('select * from home'):
        for img in imgs:
            if(type(img) == bytes):
                if first_img > 0:
                    first_img -= 1
                else:
                    myimg.append(img)
    con.commit()
    con.close()
    if pid >= 0 and pid <= len(myimg)-1:
        return send_file(io.BytesIO(myimg[pid]),mimetype='image/png',as_attachment=False,attachment_filename='%s.png' % pid)

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
        return send_file(io.BytesIO(myimg[pid]),mimetype='image/png',as_attachment=False,attachment_filename='%s.png' % pid)

@app.route("/api/project/get_project_card", methods = ['GET'])
def get_project_cards():
    skills = request.args.get('skills', default= '', type = str) # general way to get text into the api from the url

    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from project')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    card_content = ['myindex','project_name','title','discription','des1','des2']
    # images have to be gotten somewhere else
    for card in card_content:
        if card not in mycolumnames:
            # one of the card content is not in the mycolumnames
            abort(505) #abort call discription is above
    
    mycards = []
    mytemp = {}
    for myrows in cur.execute('select * from project'):        
        for card in card_content:
            if type(myrows[mycolumnames.index(card)]) != bytes:
                mytemp[card] = myrows[mycolumnames.index(card)]
        mycards.append(mytemp)
        mytemp = {}
      
    con.commit()
    con.close()
    return jsonify(mycards)

@app.route("/api/project/<string:project_name>", methods=['GET'])
def get_project(project_name):
    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from project')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    mytemp = {}
    for myrows in cur.execute('select * from project where project_name=?', (project_name,)):
        for columnames in mycolumnames:
            if type(myrows[mycolumnames.index(columnames)]) != bytes:
                mytemp[columnames] = myrows[mycolumnames.index(columnames)]

    return jsonify(mytemp)

@app.route("/api/project_img/<string:project_name>/<int:pid>.png", methods=['GET'])
def get_project_img(project_name, pid):
    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from project')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    card_content = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
    # images have to be gotten somewhere else
    for card in card_content:
        if card not in mycolumnames:
            # one of the card content is not in the mycolumnames
            abort(505) #abort call discription is above

    myimg = []
    for myrows in cur.execute("select * from project where project_name=?", (project_name,)):
        for card in card_content:
            if type(myrows[mycolumnames.index(card)]) == bytes:
                myimg.append(myrows[mycolumnames.index(card)])

    con.commit()
    con.close()
    if len(myimg) >= 1:
        return send_file(io.BytesIO(myimg[pid]),mimetype='image/png',as_attachment=False,attachment_filename='%s.png' % pid)

@app.route("/api/project_img/<string:project_name>", methods=['GET'])
def get_project_img_count(project_name):
    # this is the same thing as before just return the image count for each 
    con = sqlite3.connect(filename)
    cur = con.cursor()

    cur.execute('select * from project')
    mycolumnames = []
    for columnames in cur.description:
        mycolumnames.append(columnames[0])

    card_content = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
    # images have to be gotten somewhere else
    for card in card_content:
        if card not in mycolumnames:
            # one of the card content is not in the mycolumnames
            abort(505) #abort call discription is above

    myimg = []
    for myrows in cur.execute("select * from project where project_name=?", (project_name,)):
        for card in card_content:
            if type(myrows[mycolumnames.index(card)]) == bytes:
                myimg.append(myrows[mycolumnames.index(card)])
    
    con.commit()
    con.close()
    return jsonify({"img_count": len(myimg)})

@app.route("/api/get_resume/resume.pdf", methods=['GET'])
def get_resume():
    # the most recent resume will be posted to the link
    con = sqlite3.connect(filename)
    cur = con.cursor()

    temp = 0
    for myresumes in cur.execute("select * from resume"):
        if temp < int(myresumes[0]):
            top_resume = myresumes[1]
    return send_file(io.BytesIO(top_resume),as_attachment=False,attachment_filename='resume.pdf')

@app.route("/api/get_skills", methods=['GET'])
def get_skills():
    con = sqlite3.connect(filename)
    cur = con.cursor()

    mytemp = []
    count = 0
    for myrows in cur.execute('select skills from project'):
        for skill in myrows[0].split(';'):
            if skill not in mytemp:
                mytemp.append(skill)

    return jsonify(mytemp)