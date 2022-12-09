from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Table
from sqlalchemy.dialects.postgresql import JSONB, UUID
import uuid
Base = declarative_base()

class goesto(Base):
    __tablename__ = "goes_to_table"
    goesto_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    school = Column(String())
    username = Column(ForeignKey("login.username"))
    year = Column(Integer())
    major=Column(String())
    minor=Column(String())
    gpa=Column(String())
    degree=Column(String())
    def __init__(self, school, username, year, major, minor, gpa, degree):
        self.school = school
        self.username=username
        self.year=year
        self.major=major
        self.minor=minor
        self.gpa=gpa
        self.degree=degree

    def getSchool(self):
        return self.school
    def getMajor(self):
        return self.major
    def getMinor(self):
        return self.minor
    def getGPA(self):
        return self.gpa
    def getDegree(self):
        return self.degree

class appliedto(Base):
    __tablename__ = "applied_to_table"
    applied_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(ForeignKey("login.username"))
    year = Column(Integer())
    university=Column(String())
    school=Column(String())
    program=Column(String())
    result=Column(String())
    funding=Column(String())
    decision=Column(String())
    def __init__(self, university, username, year, school, program, result, funding, decision):
        self.username=username
        self.university = university
        self.year=year
        self.school=school
        self.program=program
        self.result=result
        self.funding=funding
        self.decision=decision

    def getUsername(self):
        return self.username
    def getUniversity(self):
        return self.university
    def getSchool(self):
        return self.school
    def getProgram(self):
        return self.program
    def getResult(self):
        return self.result
    def getFunding(self):
        return self.funding
    def getDecision(self):
        return self.decision

class Demographics(Base):
    __tablename__ = 'demographics'
    demographics_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username= Column(ForeignKey('login.username'), unique=True)
    ethnicity = Column(String())
    gender = Column(String())
    first_gen = Column(String())
    country_of_ori=Column(String())
    recommender=Column(String())
    sop= Column(String())
    cv= Column(String())
    def __init__(self, username, ethnicity, gender, first_gen, country_of_ori,recom, sop,cv):
        self.username = username
        self.ethnicity = ethnicity
        self.gender = gender
        self.first_gen = first_gen
        self.country_of_ori=country_of_ori
        self.recommender=recom
        self.sop=sop 
        self.cv=cv
    
    #Methods to abstract away accessing datatypes.
    def getUsername(self):
        return self.username
    def getEthnicity(self):
        return self.ethnicity
    def getGender(self):
        return self.gender
    def getFirstGen(self):
        return self.first_gen
    def getCOI(self):
        return self.country_of_ori
    def getRecommenders(self):
        return self.recommender
    def getSOP(self):
        return self.sop
    def getCV(self):
        return self.cv

class Login(Base):
    __tablename__ = 'login'
    login_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String(), unique=True)
    password = Column(String())
    first_name = Column(String())
    pref_name = Column(String())
    last_name = Column(String())
    pronouns = Column(String())
    email = Column(String())
    linkedin = Column(String())
    headline = Column(String())
    about = Column(String())

    def __init__(self, username, password, first_name, pref_name, last_name, pronouns, email, linkedin, headline, about):
        self.username = username
        self.password = password
        self.first_name = first_name
        self.pref_name = pref_name
        self.last_name = last_name
        self.pronouns = pronouns
        self.email = email
        self.linkedin = linkedin
        self.headline = headline
        self.about = about

    def getUsername(self):
        return self.username
    def getPassword(self):
        return self.password
    def getFirstName(self):
        return self.first_name
    def getPrefName(self):
        return self.pref_name
    def getLastName(self):
        return self.last_name
    def getPronouns(self):
        return self.pronouns
    def getEmail(self):
        return self.email
    def getLinkedIn(self):
        return self.linkedin
    def getHeadline(self):
        return self.headline
    def getAbout(self):
        return self.about