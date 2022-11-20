import os
from flask import request, jsonify, url_for, redirect
from flask import current_app as app
from backend.model import goesto, appliedto, Profile
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from werkzeug.utils import secure_filename

DATABASE_URI =  'postgresql://postgres:admin@34.71.222.229:5432/profile_gallery' 
engine = create_engine(DATABASE_URI, echo=True)
UPLOAD_FOLDER = r'C:\Users\Tiantian\Desktop'
ALLOWED_EXTENSIONS = {'pdf'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


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
    return redirect(url_for('generate_profile', username='JennyAppleseed'))

@app.route("/submit", methods=['GET', 'POST'])
def update_database():
    with Session(engine) as session:
        test_username = "test"
        print(request.files)
        if 'sop' not in request.files:
            print('No file uploaded')
        sop=request.files['sop']
        cv=request.files['cv']
        if sop and allowed_file(sop.filename):
            sopfilename = secure_filename(test_username+'_sop.pdf')
            sop.save(os.path.join(app.config['UPLOAD_FOLDER'], sopfilename))
        if sop and allowed_file(sop.filename):
            cvfilename = secure_filename(test_username+'_cv.pdf')
            cv.save(os.path.join(app.config['UPLOAD_FOLDER'], cvfilename))
        data = request.form
        demo_eth=data['demo_eth']
        print(demo_eth)
        demo_gender=data['demo_gender']
        demo_fistgen=data['demo_fistgen']
        demo_citizenship=data['demo_citizenship']
        sop='temp'
        cv='temp'
        recommender=data['rec']
        prof=Profile(test_username, 'pw', demo_eth, demo_gender, demo_fistgen, demo_citizenship, recommender, sop, cv)
        session.add(prof)
        session.flush()
        session.refresh(prof)
        for i in range(1,5):
            if 'edu_uni_name_'+str(i) in data.keys():
                edu_uni_name=data['edu_uni_name_'+str(i)]
                edu_degree=data['edu_degree_'+str(i)]
                edu_gpa=data['edu_gpa_'+str(i)]
                edu_major=data['edu_major_'+str(i)]
                edu_minor=data['edu_minor_'+str(i)]
                ####NEED YEAR UPDATE HERE TODO TODO TODO####
                goesto_row=goesto(edu_uni_name, test_username, 2020, edu_major, edu_minor, edu_gpa, edu_degree)
                session.add(goesto_row)
        for j in range(1,13):
            if 'res_uni_'+str(j) in data.keys():
                res_uni_1=data['res_uni_'+str(j)]
                res_school_1=data['res_school_'+str(j)]
                res_prog_1=data['res_prog_'+str(j)]
                res_funding_1=data['res_funding_'+str(j)]
                res_app_1=data['res_app_'+str(j)]
                res_dec_1=data['res_dec_'+str(j)]
                app_to_row1=appliedto(res_uni_1, test_username, 2020,res_school_1,res_prog_1, res_app_1, res_funding_1, res_dec_1)
                session.add(app_to_row1)
        session.commit()
    return ''

@app.route("/profile/<username>", methods=['GET'])
def generate_profile(username):
    with Session(engine) as session:
        user_profile = session.query(Profile).filter_by(username=username)
        applied_schools = session.query(appliedto).filter_by(username=username)
        goesto_schools = session.query(goesto).filter_by(username=username)
        data = {
            ##
            # The following fetches the data underneath the "Demographics," "Recommenders," and "SOP/CV" headers.
            # The labels refer to which field is being fetched. Note that "citizenship" refers to country of origin.
            ##
            'username': user_profile[0].getUsername(),
            'ethnicity': user_profile[0].getEthnicity(),
            'gender': user_profile[0].getGender(),
            'firstgen': user_profile[0].getFirstGen(),
            'citizenship': user_profile[0].getCOI(),
            'recommender': user_profile[0].getRecommenders(),
            'sop': user_profile[0].getSOP(),
            'cv': user_profile[0].getCV()
        }

        goesto_index = 1
        for school in goesto_schools:
            ##
            # The following fetches the data underneath the "Education" header.
            # The field name refers to the university name. The field degree refers to the type of degree earned.
            # The other fields are self explanatory.
            ##
            data['uni_name_' + str(goesto_index)] = school.getSchool()
            data['uni_gpa_' + str(goesto_index)] = school.getGPA()
            data['uni_major_' + str(goesto_index)] = school.getMajor()
            data['uni_minor_' + str(goesto_index)] = school.getMinor()
            data['uni_degree_' + str(goesto_index)] = school.getDegree()
            goesto_index += 1
       
        applied_index = 1
        for application in applied_schools:
            ##
            # The following fetches the data underneath the "Application Results" header.
            # The field university refers to the university to which the applicant applied.
            # The field school refers to the sub-school. "Result" refers to whether or not their application was accepted.
            # Decision refers to whether or not they chose to attend that school.
            # Finally, funding reflects their funding status.
            ##
            data['application_university_' + str(applied_index)] = application.getUniversity()
            data['application_school_' + str(applied_index)] = application.getSchool()
            data['application_program_' + str(applied_index)] = application.getProgram()
            data['application_result_' + str(applied_index)] = application.getResult()
            data['application_funding_' + str(applied_index)] = application.getFunding()
            data['application_decision_' + str(applied_index)] = application.getDecision()
            applied_index += 1

    data['final_choice'] = getFinalChoice(data)
    print(data)
    return jsonify(data)

@app.route("/search/<university>", methods=['GET'])
def search(university):
    data = {}
    results = 0
    with Session(engine) as session:
        applied_schools = session.query(appliedto).filter_by(university=university)

        applied_index = 0
        for appliant in applied_schools:
            data['application_university_' + str(applied_index)] = appliant.getUniversity()
            data['application_school_' + str(applied_index)] = appliant.getSchool()
            data['application_program_' + str(applied_index)] = appliant.getProgram()
            applied_index += 1
            results += 1
    data['result_count'] = results
    return jsonify(data)



def getFinalChoice(data):
    index = 1
    finalChoice = ''
    while index < 13:
        query = data.get('application_decision_' + str(index))
        print(query)
        if query == "Accepted":
            finalChoice = data['application_university_' + str(index)]
            break
        elif query is None:
            break
        else:
            index += 1
    return finalChoice