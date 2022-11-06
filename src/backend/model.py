from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Table
from sqlalchemy.dialects.postgresql import JSONB, UUID
import uuid
Base = declarative_base()

class goesto(Base):
    __tablename__ = "goes_to_table"
    school_id = Column(ForeignKey("school.name"), primary_key=True)
    profile_id = Column(ForeignKey("profile.id"), primary_key=True)
    year = Column(Integer())
    major=Column(String())
    minor=Column(String())
    gpa=Column(Integer())
    degree=Column(String())
    profile = relationship('Profile')
    def __init__(self, school_id, profile_id, year, major, minor, gpa, degree):
        self.school_id=school_id
        self.profile_id=profile_id
        self.year=year
        self.major=major
        self.minor=minor
        self.gpa=gpa
        self.degree=degree

class appliedto(Base):
    __tablename__ = "applied_to_table"
    school_id = Column(ForeignKey("school.name"), primary_key=True)
    profile_id = Column(ForeignKey("profile.id"), primary_key=True)
    year = Column(Integer())
    school=Column(String())
    program=Column(String())
    result=Column(String())
    funding=Column(String())
    decision=Column(String())
    profile=relationship('Profile')
    def __init__(self, school_id, profile_id, year,school, program, result, funding, decision):
        self.school_id=school_id
        self.profile_id=profile_id
        self.year=year
        self.school=school
        self.program=program
        self.result=result
        self.funding=funding
        self.decision=decision

class School(Base):
    __tablename__ = 'school'
    name = Column(String(), primary_key=True)
    state = Column(String())
    city = Column(String())
    info = Column(JSONB)
    def __init__(self, name, state, city, info):
        self.name=name
        self.state=state
        self.city=city
        self.info=info

class user_demo(Base):
    __tablename__='user'
    uid= Column(String(), primary_key=True)
    pw= Column(String())
    name=Column(String())
    def __init__(self, uid, pw, name):
        self.uid=uid
        self.pw=pw
        self.name=name

class Profile(Base):
    __tablename__ = 'profile'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    uid= Column(ForeignKey("user.uid"))
    ethnicity = Column(String())
    gender = Column(String())
    first_gen = Column(String())
    country_of_ori=Column(String())
    recommender=Column(String())
    sop= Column(String())
    cv= Column(String())
    goes_to=relationship('goesto')
    applied_to=relationship('appliedto')

    def __init__(self, uid, ethnicity, gender, first_gen,country_of_ori,recom, sop,cv):
        
        self.uid = uid
        self.ethnicity = ethnicity
        self.gender = gender
        self.first_gen = first_gen
        self.country_of_ori=country_of_ori
        self.recommender=recom
        self.sop=sop 
        self.cv=cv 


