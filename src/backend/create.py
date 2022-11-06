from sqlalchemy.ext.declarative import declarative_base
from model import Base
from sqlalchemy import create_engine, MetaData

DATABASE_URI =  'postgresql://postgres:admin@34.71.222.229:5432/profile_gallery' 

engine = create_engine(DATABASE_URI, echo=True)
#Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)
