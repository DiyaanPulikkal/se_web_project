from sqlalchemy import Column, Integer, String, Boolean, TEXT
from models.base import Base


class Activity(Base):
    __tablename__ = 'activities'

    index = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    image = Column(String)
    startRegistration = Column(String)
    endRegistration = Column(String)
    participants = Column(TEXT)
    maxParticipants = Column(Integer)
    isGroup = Column(Boolean)
    link = Column(String)
