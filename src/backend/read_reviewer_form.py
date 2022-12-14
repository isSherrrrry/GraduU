from flask import request, jsonify, redirect, send_from_directory, url_for
from flask import current_app as app
import os
from backend.model import goesto, appliedto, Demographics, Login
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from werkzeug.utils import secure_filename

DATABASE_URI =  'postgresql://postgres:admin@34.71.222.229:5432/profile_gallery' 
engine = create_engine(DATABASE_URI, echo=True)

UPLOAD_FOLDER = '/home/ericxue64/Uploads'
ALLOWED_EXTENSIONS = {'pdf'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route("/")
def index():
    
    # with Session(engine) as session:
    #     goesto_schools = session.query(goesto).filter_by(username="Jenny Appleseed")
    #     data_applied = {}
    #     goesto_index = 1
    #     for school in goesto_schools:
    #         data_applied['under_uni_name_' + str(goesto_index)] = school.getSchool()
    #         data_applied['under_gpa_' + str(goesto_index)] = school.getGPA()
    #         data_applied['under_major_' + str(goesto_index)] = school.getMajor()
    #         data_applied['under_minor_' + str(goesto_index)] = school.getMinor()
    #         goesto_index += 1
    #     print(data_applied)
    # return redirect(url_for('generate_profile', username='JennyAppleseed'))
    json = {}
    a = {'name': 'Henry', 'password': 'urmom'}
    b = {'name': 'Bella', 'password': 'urdad'}
    c = {'name': 'Adrian', 'password': 'urcat'}
    json['result_1'] = a
    json['result_2'] = b
    json['result_3'] = c
    return redirect("http://localhost:3000/")

##
# Handle submissions.
##

@app.route('/signup', methods=['POST'])
def register():
    data = request.get_json()
    password = data['password']
    verify = data['re_password']

    validity = {
        'validPW': True,
        'validUser': True
    }

    #Matches passwords
    if password != verify:
        validity['validPW'] = False
        return jsonify(validity)

    with Session(engine) as session:
        username = data['username']
        used = len(session.query(Login).filter_by(username=username).all())
        if used > 0:
            validity['validUser'] = False
            return jsonify(validity)

        first_name = data['first_name']
        pref_name = data['pref_name']
        last_name = data['last_name']
        pronouns = data['pronouns']
        email = data['email']
        linkedin = data['linkedin']
        headline = data['headline']
        about = data['about']

        login = Login(username, password, first_name, pref_name, last_name, pronouns, email, linkedin, headline, about)
        session.add(login)
        session.commit()
    return jsonify(validity)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    validity = {
        'user_exists': True,
        'valid_password': True,
        'username': data['username']
    }

    user = data['username']
    pw = data['password']

    with Session(engine) as session:
        query = session.query(Login).filter_by(username=user)
        if len(query.all()) == 0:
            validity['user_exists'] = False
            return jsonify(validity)
        
        true_pw = query[0].getPassword()
        if pw != true_pw:
            validity['valid_password'] = False
            return jsonify(validity)

    return jsonify(validity)

@app.route("/submit/<username>", methods=['POST'])
def update_database(username):
    with Session(engine) as session:
        test_username = username
        sop=request.files['sop']
        cv=request.files['cv']
        sopfilename=""
        cvfilename=""
        if sop and allowed_file(sop.filename):
            sopfilename = secure_filename(test_username+'_sop.pdf')
            sop.save(os.path.join(app.config['UPLOAD_FOLDER'], sopfilename))
        if cv and allowed_file(cv.filename):
            cvfilename = secure_filename(test_username+'_cv.pdf')
            cv.save(os.path.join(app.config['UPLOAD_FOLDER'], cvfilename))
        data = request.form
        demo_eth=data['demo_eth']
        demo_gender=data['demo_gender']
        demo_fistgen=data['demo_fistgen']
        demo_citizenship=data['demo_citizenship']
        recommender=data['rec']
        prof=Demographics(test_username, demo_eth, demo_gender, demo_fistgen, demo_citizenship, recommender, sopfilename, cvfilename)
        session.add(prof)
        for i in range(1,5):
            if 'edu_uni_name_'+str(i) in data.keys():
                edu_uni_name=data['edu_uni_name_'+str(i)]
                edu_degree=data['edu_degree_'+str(i)]
                edu_gpa=data['edu_gpa_'+str(i)]
                edu_major=data['edu_major_'+str(i)]
                edu_minor=data['edu_minor_'+str(i)]
                goesto_row=goesto(edu_uni_name, test_username, 2020, edu_major, edu_minor, edu_gpa, edu_degree)
                session.add(goesto_row)
        for j in range(1,13):
            if 'res_uni_'+str(j) in data.keys():
                res_uni_1=data['res_uni_'+str(j)]
                res_school_1=data['res_school_'+str(j)]
                res_prog_1=data['res_prog_'+str(j)]
                res_funding_1=data['res_funding_'+str(j)]
                res_app_1=data['res_app_'+str(j)]
                res_dec_1 = ''
                if res_app_1 == "Accepted":
                    res_dec_1 = data['res_dec_'+str(j)]
                else:
                    res_dec_1 = "Declined"
                app_to_row1=appliedto(res_uni_1, test_username, 2020,res_school_1,res_prog_1, res_app_1, res_funding_1, res_dec_1)
                session.add(app_to_row1)
        session.commit()
    return redirect("http://gradu.life/thankyou")

@app.route("/edit/<username>", methods=['POST'])
def edit_database(username):
    with Session(engine) as session:
        
        test_username = username
        files = session.query(Demographics).filter_by(username=username)
        
        
        sop=request.files['sop']
        cv=request.files['cv']
        sopfilename = ''
        cvfilename = ''
        
        if sop.filename == '':
            sopfilename = files[0].getSOP()
            print(sopfilename)
        elif sop and allowed_file(sop.filename):
            sopfilename = secure_filename(test_username+'_sop.pdf')
            sop.save(os.path.join(app.config['UPLOAD_FOLDER'], sopfilename))
        if cv.filename == '':
            cvfilename = files[0].getCV()
        elif cv and allowed_file(cv.filename):
            cvfilename = secure_filename(test_username+'_cv.pdf')
            cv.save(os.path.join(app.config['UPLOAD_FOLDER'], cvfilename))
        
        data = request.form
        demo_eth=data['demo_eth']
        demo_gender=data['demo_gender']
        demo_fistgen=data['demo_firstgen']
        demo_citizenship=data['demo_citizenship']
        recommender=data['rec']
        
        session.query(Demographics).filter_by(username=username).delete()
        session.query(appliedto).filter_by(username=username).delete()
        session.query(goesto).filter_by(username=username).delete()
        session.commit()
        prof=Demographics(test_username, demo_eth, demo_gender, demo_fistgen, demo_citizenship, recommender, sopfilename, cvfilename)
        session.add(prof)
        for i in range(1,5):
            if 'edu_uni_name_'+str(i) in data.keys():
                edu_uni_name=data['edu_uni_name_'+str(i)]
                edu_degree=data['edu_degree_'+str(i)]
                edu_gpa=data['edu_gpa_'+str(i)]
                edu_major=data['edu_major_'+str(i)]
                edu_minor=data['edu_minor_'+str(i)]
                goesto_row=goesto(edu_uni_name, test_username, 2020, edu_major, edu_minor, edu_gpa, edu_degree)
                session.add(goesto_row)
        for j in range(1,13):
            if 'res_uni_'+str(j) in data.keys():
                res_uni_1=data['res_uni_'+str(j)]
                res_school_1=data['res_school_'+str(j)]
                res_prog_1=data['res_prog_'+str(j)]
                res_funding_1=data['res_funding_'+str(j)]
                res_app_1=data['res_app_'+str(j)]
                res_dec_1 = ''
                if res_app_1 == "Accepted":
                    res_dec_1 = data['res_dec_'+str(j)]
                else:
                    res_dec_1 = "Declined"
                app_to_row1=appliedto(res_uni_1, test_username, 2020,res_school_1,res_prog_1, res_app_1, res_funding_1, res_dec_1)
                session.add(app_to_row1)
        session.commit()
    return redirect("http://gradu.life/thankyou")

##
# Handles the construction of profiles.
##

##Builds a profile page for an inputted user.
@app.route("/profile/<username>", methods=['GET'])
def generate_profile(username):
    data = {}
    data.update(getDemographics(username))
    data.update(get_goes_to(username))
    data.update(get_applied_to(username))
    data.update(getProfile(username))
    data['final_choice'] = getFinalChoice(data)
    return jsonify(data)

##Builds an edit page for an inputted user.
@app.route("/edit_profile/<username>", methods=['GET'])
def generate_edit_profile(username):
    data = {}
    data.update(getDemographics(username))
    data.update(get_goes_to(username, True))
    data.update(get_applied_to(username, True))

    return jsonify(data)

##Gets all user profile information (doesn't include school information).
@app.route('/user_profile/<username>', methods=['GET'])
def generate_user_profile(username):
    profileData = getProfile(username)
    apps = get_applied_to(username)
    sop_cv = getDemographics(username)
    finalChoice = getFinalChoice(apps)

    data = {
        'university': finalChoice,
        'sop': sop_cv['sop'],
        'cv': sop_cv['cv'],
    }
    data.update(profileData)

    return jsonify(data)

##Determines if a user has already submitted a profile.
@app.route('/has_submitted/<username>')
def hasSubmitted(username):
    submission = {}
    with Session(engine) as session:
        result = len(session.query(Demographics).filter_by(username=username).all())
        if result == 0:
            submission['submitted'] = False
        else:
            submission['submitted'] = True
    return jsonify(submission)

#####
# Search Functions
#####

##Pulls search results given an input university.
@app.route("/search_uni/<university>", methods=['GET'])
def uni_search(university):
    data = {}
    result = 1
    uniSplit = university.split(" ")
    similarity = uniSplit[0] + "%"
    with Session(engine) as session:
        applied_schools = session.query(appliedto).filter(appliedto.university.ilike(similarity))
        for applicant in applied_schools:
            username = applicant.getUsername()
            university = applicant.getUniversity()
            school = applicant.getSchool()
            program = applicant.getProgram()

            demographics = getDemographics(username)
            ethnicity = demographics.get('ethnicity')
            gender = demographics.get('gender')
            sop_aval = demographics.get('sop')
            cv_aval = demographics.get('cv')
            sop = 'SOP not Available' if sop_aval == '' else 'SOP Available'
            cv = 'CV not Available' if cv_aval == '' else 'CV Available'

            entry = {
                'id': result,
                'name': username,
                'curr_uni': university,
                'curr_school': school,
                'curr_program': program,
                'race': ethnicity,
                'gender': gender,
                'sop': sop,
                'cv': cv
            }

            data['id_' + str(result)] = entry
            result += 1    
    data['length'] = result
    return jsonify(data)

#Pulls search results given an inputted major/field of study
@app.route("/search_major/<major>", methods=['GET'])
def major_search(major):
    data = {}
    result = 1
    majorSplit = major.split(" ")
    #Accounts for two word or otherwise weird majors.
    similarity = majorSplit[0] + "%"

    with Session(engine) as session:
        applications = session.query(appliedto).filter(appliedto.program.ilike(similarity))
        for applicant in applications:
            username = applicant.getUsername()
            university = applicant.getUniversity()
            school = applicant.getSchool()
            program = applicant.getProgram()

            demographics = getDemographics(username)
            ethnicity = demographics.get('ethnicity')
            gender = demographics.get('gender')
            sop_aval = demographics.get('sop')
            cv_aval = demographics.get('cv')
            sop = 'SOP not Available' if sop_aval == '' else 'SOP Available'
            cv = 'CV not Available' if cv_aval == '' else 'CV Available'

            entry = {
                'id': result,
                'name': username,
                'curr_uni': university,
                'curr_school': school,
                'curr_program': program,
                'race': ethnicity,
                'gender': gender,
                'sop': sop,
                'cv': cv
            }
            data['id_' + str(result)] = entry
            result += 1    
    data['length'] = result
    return jsonify(data)

##
# Non-Routing methods that help with the construction of the Promises to be returned to the frontend.
##

#Calculates the school the user ended up attending.
def getFinalChoice(data):
    index = 1
    finalChoice = ''
    while index < 13:
        query = data.get('application_decision_' + str(index))
        if query == "Accepted":
            finalChoice = data['application_university_' + str(index)]
            break
        elif query is None:
            break
        else:
            index += 1
    return finalChoice

#Gets demographic data
def getDemographics(username):
    demographics = {}
    with Session(engine) as session:
        user_demo = session.query(Demographics).filter_by(username=username)
        demographics = {
            ##
            # The following fetches the data underneath the "Demographics," "Recommenders," and "SOP/CV" headers.
            # The labels refer to which field is being fetched. Note that "citizenship" refers to country of origin.
            ##
            'username': user_demo[0].getUsername(),
            'ethnicity': user_demo[0].getEthnicity(),
            'gender': user_demo[0].getGender(),
            'firstgen': user_demo[0].getFirstGen(),
            'citizenship': user_demo[0].getCOI(),
            'recommender': user_demo[0].getRecommenders(),
            'sop': user_demo[0].getSOP(),
            'cv': user_demo[0].getCV()
        }
    return demographics

#Gets school data
def get_goes_to(username, returnCount=False):
    goes_to = {}
    with Session(engine) as session:
        goesto_schools = session.query(goesto).filter_by(username=username)

        goesto_index = 1
        for school in goesto_schools:
            ##
            # The following fetches the data underneath the "Education" header.
            # The field name refers to the university name. The field degree refers to the type of degree earned.
            # The other fields are self explanatory.
            ##
            goes_to['uni_name_' + str(goesto_index)] = school.getSchool()
            goes_to['uni_gpa_' + str(goesto_index)] = school.getGPA()
            goes_to['uni_major_' + str(goesto_index)] = school.getMajor()
            goes_to['uni_minor_' + str(goesto_index)] = school.getMinor()
            goes_to['uni_degree_' + str(goesto_index)] = school.getDegree()
            goesto_index += 1
        if returnCount is True:
            goes_to['education_count'] = goesto_index - 1
    return goes_to

#Gets application data
def get_applied_to(username, returnCount=False):
    applied_to = {}

    with Session(engine) as session:
        applied_schools = session.query(appliedto).filter_by(username=username)
        applied_index = 1
        for application in applied_schools:
            ##
            # The following fetches the data underneath the "Application Results" header.
            # The field university refers to the university to which the applicant applied.
            # The field school refers to the sub-school. "Result" refers to whether or not their application was accepted.
            # Decision refers to whether or not they chose to attend that school.
            # Finally, funding reflects their funding status.
            ##
            applied_to['application_university_' + str(applied_index)] = application.getUniversity()
            applied_to['application_school_' + str(applied_index)] = application.getSchool()
            applied_to['application_program_' + str(applied_index)] = application.getProgram()
            applied_to['application_result_' + str(applied_index)] = application.getResult()
            applied_to['application_funding_' + str(applied_index)] = application.getFunding()
            applied_to['application_decision_' + str(applied_index)] = application.getDecision()
            applied_index += 1
        if returnCount is True:
            applied_to['application_count'] = applied_index - 1

    return applied_to

#Gets profile data
def getProfile(username):
    data = {}
    
    with Session(engine) as session:
        profileQ = session.query(Login).filter_by(username=username)
        profile = profileQ[0]
        data['first_name'] = profile.getFirstName()
        data['pref_name'] = profile.getPrefName()
        data['last_name'] = profile.getLastName()
        data['pronouns'] = profile.getPronouns()
        data['email'] = profile.getEmail()
        data['linkedin'] = profile.getLinkedIn()
        data['headline'] = profile.getHeadline()
        data['about'] = profile.getAbout()
    return data

##
# Functions handling file upload/download
##

#Returns a path to the appropriate file
@app.route('/download/<path:pdf>')
def send_pdf(pdf):
    return send_from_directory(app.config['UPLOAD_FOLDER'], pdf)

#Determines if a file is allowed
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
