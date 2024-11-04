from sqlalchemy import Column, Integer, String, Boolean, TEXT
from models.base import Base


class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    isMale = Column(Boolean)
    year = Column(Integer)
    registeredActivities = Column(TEXT)
    isStudying = Column(Boolean)
    password = Column(String)
