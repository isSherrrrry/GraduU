from flask import request, jsonify, url_for, redirect
from flask import current_app as app
from backend.model import goesto, appliedto, Profile
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

DATABASE_URI =  'postgresql://postgres:admin@34.71.222.229:5432/profile_gallery' 
engine = create_engine(DATABASE_URI, echo=True)

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
        test_username = "JennyAppleseed"
        data = request.get_json()
        demo_eth=data['demo_eth']
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
        if 'edu_uni_name_1' in data.keys():
            edu_uni_name_1=data['edu_uni_name_1']
            edu_degree_1=data['edu_degree_1']
            edu_gpa_1=data['edu_gpa_1']
            edu_major_1=data['edu_major_1']
            edu_minor_1=data['edu_minor_1']
            ####NEED YEAR UPDATE HERE TODO TODO TODO####
            goesto_row1=goesto(edu_uni_name_1, test_username, 2020, edu_major_1, edu_minor_1,edu_gpa_1, edu_degree_1)
            session.add(goesto_row1)
            if 'edu_uni_name_2' in data.keys():
                edu_uni_name_2=data['edu_uni_name_2']
                edu_degree_2=data['edu_degree_2']
                edu_gpa_2=data['edu_gpa_2']
                edu_major_2=data['edu_major_2']
                edu_minor_2=data['edu_minor_2']
                goesto_row2=goesto(edu_uni_name_2, test_username, 2020, edu_major_2, edu_minor_2,edu_gpa_2, edu_degree_2)
                session.add(goesto_row2)
                if 'edu_uni_name_3' in data.keys():
                    edu_uni_name_3=data['edu_uni_name_3']
                    edu_degree_3=data['edu_degree_3']
                    edu_gpa_3=data['edu_gpa_3']
                    edu_major_3=data['edu_major_3']
                    edu_minor_3=data['edu_minor_3']
                    goesto_row3=goesto(edu_uni_name_3, test_username, 2020, edu_major_3, edu_minor_3,edu_gpa_3, edu_degree_3)
                    session.add(goesto_row3)
                    if 'edu_uni_name_4' in data.keys():
                        edu_uni_name_4=data['edu_uni_name_4']
                        edu_degree_4=data['edu_degree_4']
                        edu_gpa_4=data['edu_gpa_4']
                        edu_major_4=data['edu_major_4']
                        edu_minor_4=data['edu_minor_4']
                        goesto_row4=goesto(edu_uni_name_4, test_username, 2020, edu_major_4, edu_minor_4,edu_gpa_4, edu_degree_4)
                        session.add(goesto_row4)

        if 'res_uni_1' in data.keys():
            res_uni_1=data['res_uni_1']
            res_school_1=data['res_school_1']
            res_prog_1=data['res_prog_1']
            res_funding_1=data['res_funding_1']
            res_app_1=data['res_app_1']
            res_dec_1=data['res_dec_1']
            app_to_row1=appliedto(res_uni_1, test_username, 2020,res_school_1,res_prog_1, res_app_1, res_funding_1, res_dec_1)
            session.add(app_to_row1)
            if 'res_uni_2' in data.keys():
                res_uni_2=data['res_uni_2']
                res_school_2=data['res_school_2']
                res_prog_2=data['res_prog_2']
                res_funding_2=data['res_funding_2']
                res_app_2=data['res_app_2']
                res_dec_2=data['res_dec_2']
                app_to_row2=appliedto(res_uni_2, test_username, 2020,res_school_2,res_prog_2, res_app_2, res_funding_2, res_dec_2)
                session.add(app_to_row2)
                if 'res_uni_3' in data.keys():
                    res_uni_3=data['res_uni_3']
                    res_school_3=data['res_school_3']
                    res_prog_3=data['res_prog_3']
                    res_funding_3=data['res_funding_3']
                    res_app_3=data['res_app_3']
                    res_dec_3=data['res_dec_3']
                    app_to_row3=appliedto(res_uni_3, test_username, 2020,res_school_3,res_prog_3, res_app_3, res_funding_3, res_dec_3)
                    session.add(app_to_row3)
                    if 'res_uni_4' in data.keys():
                        res_uni_4=data['res_uni_4']
                        res_school_4=data['res_school_4']
                        res_prog_4=data['res_prog_4']
                        res_funding_4=data['res_funding_4']
                        res_app_4=data['res_app_4']
                        res_dec_4=data['res_dec_4']
                        app_to_row4=appliedto(res_uni_4, test_username, 2020, res_school_4,res_prog_4, res_app_4, res_funding_4, res_dec_4)
                        session.add(app_to_row4)
                        if 'res_uni_5' in data.keys():
                            res_uni_5=data['res_uni_5']
                            res_school_5=data['res_school_5']
                            res_prog_5=data['res_prog_5']
                            res_funding_5=data['res_funding_5']
                            res_app_5=data['res_app_5']
                            res_dec_5=data['res_dec_5']
                            app_to_row5=appliedto(res_uni_5, test_username, 2020, res_school_5,res_prog_5, res_app_5, res_funding_5, res_dec_5)
                            session.add(app_to_row5)
                            if 'res_uni_6' in data.keys():
                                res_uni_6=data['res_uni_6']
                                res_school_6=data['res_school_6']
                                res_prog_6=data['res_prog_6']
                                res_funding_6=data['res_funding_6']
                                res_app_6=data['res_app_6']
                                res_dec_6=data['res_dec_6']
                                app_to_row6=appliedto(res_uni_6, test_username, 2020, res_school_6,res_prog_6, res_app_6, res_funding_6, res_dec_6)
                                session.add(app_to_row6)
                                if 'res_uni_7' in data.keys():
                                    res_uni_7=data['res_uni_7']
                                    res_school_7=data['res_school_7']
                                    res_prog_7=data['res_prog_7']
                                    res_funding_7=data['res_funding_7']
                                    res_app_7=data['res_app_7']
                                    res_dec_7=data['res_dec_7']
                                    app_to_row7=appliedto(res_uni_7, test_username, 2020, res_school_7,res_prog_7, res_app_7, res_funding_7, res_dec_7)
                                    session.add(app_to_row7)
                                    if 'res_uni_8' in data.keys():
                                        res_uni_8=data['res_uni_8']
                                        res_school_8=data['res_school_8']
                                        res_prog_8=data['res_prog_8']
                                        res_funding_8=data['res_funding_8']
                                        res_app_8=data['res_app_8']
                                        res_dec_8=data['res_dec_8']
                                        app_to_row8=appliedto(res_uni_8, test_username, 2020, res_school_8,res_prog_8, res_app_8, res_funding_8, res_dec_8)
                                        session.add(app_to_row8)
                                        if 'res_uni_9' in data.keys():
                                            res_uni_9=data['res_uni_9']
                                            res_school_9=data['res_school_9']
                                            res_prog_9=data['res_prog_9']
                                            res_funding_9=data['res_funding_9']
                                            res_app_9=data['res_app_9']
                                            res_dec_9=data['res_dec_9']
                                            app_to_row9=appliedto(res_uni_9, test_username, 2020, res_school_9,res_prog_9, res_app_9, res_funding_9, res_dec_9)
                                            session.add(app_to_row9)
                                            if 'res_uni_10' in data.keys():
                                                res_uni_10=data['res_uni_10']
                                                res_school_10=data['res_school_10']
                                                res_prog_10=data['res_prog_10']
                                                res_funding_10=data['res_funding_10']
                                                res_app_10=data['res_app_10']
                                                res_dec_10=data['res_dec_10']
                                                app_to_row10=appliedto(res_uni_10, test_username, 2020, res_school_10,res_prog_10, res_app_10, res_funding_10, res_dec_10)
                                                session.add(app_to_row10)
                                                if 'res_uni_11' in data.keys():
                                                    res_uni_11=data['res_uni_11']
                                                    res_school_11=data['res_school_11']
                                                    res_prog_11=data['res_prog_11']
                                                    res_funding_11=data['res_funding_11']
                                                    res_app_11=data['res_app_11']
                                                    res_dec_11=data['res_dec_11']
                                                    app_to_row11=appliedto(res_uni_11, test_username, 2020, res_school_11,res_prog_11, res_app_11, res_funding_11, res_dec_11)
                                                    session.add(app_to_row11)
                                                    if 'res_uni_12' in data.keys():
                                                        res_uni_12=data['res_uni_12']
                                                        res_school_12=data['res_school_12']
                                                        res_prog_12=data['res_prog_12']
                                                        res_funding_12=data['res_funding_12']
                                                        res_app_12=data['res_app_12']
                                                        res_dec_12=data['res_dec_12']
                                                        app_to_row12=appliedto(res_uni_12, test_username, 2020, res_school_12,res_prog_12, res_app_12, res_funding_12, res_dec_12)
                                                        session.add(app_to_row12)
        session.commit()
    return ''

@app.route("/profile/<username>", methods=['GET'])
def generate_profile(username):
    data = {}
    data.update(getDemographics(username))
    data.update(get_goes_to(username))
    data.update(get_applied_to(username))
    data['final_choice'] = getFinalChoice(data)
    return jsonify(data)

@app.route("/search/<university>", methods=['GET'])
def search(university):
    data = {}
    result = 1
    with Session(engine) as session:
        applied_schools = session.query(appliedto).filter_by(university=university)
        for applicant in applied_schools:
            username = applicant.getUsername()

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
            cv = 'CV not Avaliable' if cv_aval is None else 'SOP Avaliable'

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