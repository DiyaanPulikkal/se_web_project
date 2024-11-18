from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.activity_model import Activity
from models.student_model import Student
from models.email_model import Email
from models.base import Base

DATABASE_URL = "sqlite:///./database/database.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
Base.metadata.create_all(bind=engine)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



