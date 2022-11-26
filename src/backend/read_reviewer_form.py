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
    # return redirect(url_for('generate_profile', username='JennyAppleseed'))
    json = {}
    a = {'name': 'Henry', 'password': 'urmom'}
    b = {'name': 'Bella', 'password': 'urdad'}
    c = {'name': 'Adrian', 'password': 'urcat'}
    json['result_1'] = a
    json['result_2'] = b
    json['result_3'] = c
    return jsonify(json)

##
# Routing methods that return Promises to frontend.
##
@app.route("/submit", methods=['GET', 'POST'])
def update_database():
    with Session(engine) as session:
        test_username = "testing3"
        print(request.files)
        if 'sop' not in request.files:
            print('No file uploaded')
        sop=request.files['sop']
        cv=request.files['cv']
        if sop and allowed_file(sop.filename):
            sopfilename = secure_filename(test_username+'_sop.pdf')
            sop.save(os.path.join(app.config['UPLOAD_FOLDER'], sopfilename))
        if cv and allowed_file(sop.filename):
            cvfilename = secure_filename(test_username+'_cv.pdf')
            cv.save(os.path.join(app.config['UPLOAD_FOLDER'], cvfilename))
        if 'sop' not in request.files:
            sopfilename = 'no sop uploaded'
        if 'cv' not in request.files:
            cvfilename = 'no cv uploaded'
        data = request.form
        demo_eth=data['demo_eth']
        print(demo_eth)
        demo_gender=data['demo_gender']
        demo_fistgen=data['demo_fistgen']
        demo_citizenship=data['demo_citizenship']
        recommender=data['rec']
        prof=Profile(test_username, 'pw', demo_eth, demo_gender, demo_fistgen, demo_citizenship, recommender, sopfilename, cvfilename)
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
    return redirect('http://10.44.189.230:3000/thankyou')


##Builds a profile page for an inputted user.
@app.route("/profile/<username>", methods=['GET'])
def generate_profile(username):
    data = {}
    data.update(getDemographics(username))
    data.update(get_goes_to(username))
    data.update(get_applied_to(username))
    data['final_choice'] = getFinalChoice(data)
    return jsonify(data)


#####
# Search Functions
#####

#Redirect for searching via a University
@app.route("/search/by_uni", methods=['POST'])
def get_query_university():
    data=request.get_json()
    return ''

##Pulls search results given an input university.
@app.route("/search/<university>", methods=['GET'])
def search(university):
    data = {}
    searched = set()
    result = 1
    with Session(engine) as session:
        applied_schools = session.query(appliedto).filter_by(university=university)
        for applicant in applied_schools:
            username = applicant.getUsername()
            if username not in searched:
                application_data = get_applied_to(username)
                finalChoice = getFinalChoice(application_data)

                education_data = get_goes_to(username)
                origin_school = education_data.get('uni_name_1')
                major = education_data.get('uni_major_1')

                demographics = getDemographics(username)
                ethnicity = demographics.get('ethnicity')
                gender = demographics.get('gender')
                sop_aval = demographics.get('sop')
                cv_aval = demographics.get('cv')
                sop = 'SOP not Avaliable' if sop_aval is None else 'SOP Avaliable'
                cv = 'CV not Avaliable' if cv_aval is None else 'CV Avaliable'

                entry = {
                    'id': result,
                    'name': username,
                    'curr_uni': finalChoice,
                    'curr_major': 'CS',
                    'prev_uni': origin_school,
                    'prev_major': major,
                    'race': ethnicity,
                    'gender': gender,
                    'sop': sop,
                    'cv': cv
                }

                data['id_' + str(result)] = entry
                result += 1
                searched.add(username)
    data['length'] = result
    return jsonify(data)


##
# Non-Routing methods that help with the construction of the Promises to be returned to the frontend.
##

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

def getDemographics(username):
    demographics = {}
    with Session(engine) as session:
        user_profile = session.query(Profile).filter_by(username=username)
        demographics = {
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
    return demographics

def get_goes_to(username):
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

    return goes_to

def get_applied_to(username):
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

    return applied_to
