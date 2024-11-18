from models.base import Base
from sqlalchemy import Column, String

class Email(Base):
    __tablename__ = 'emails'

    address = Column(String, primary_key=True)