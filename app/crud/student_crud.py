from sqlalchemy.orm import Session
from models.student_model import Student
from schemas.student import StudentCreate
import json
from typing import List

def create_student(db: Session, student: StudentCreate) -> (Student | None):
    if db.query(Student).filter(Student.id == student.id).first() != None:
        return None

    db_student = Student(
        id=student.id, 
        name=student.name, 
        isMale=student.isMale, 
        year=student.year, 
        isStudying=student.isStudying, 
        password=student.password, 
        registeredActivities=json.dumps([])
    )    
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def login_student(db: Session, student_id: int, password: str) -> (Student | None):
    db_student = db.query(Student).filter(Student.id == student_id).first()
    if db_student == None:
        return None
    if db_student.password != password:
        return None
    return db_student

def get_student_by_id(db: Session, student_id: int) -> (Student | None):
    return db.query(Student).filter(Student.id == student_id).first()

def get_all_students(db: Session) -> (List[Student] | None):
    return db.query(Student).all()

def delete_student(db: Session, student_id: int) -> (Student | None):
    db_student = db.query(Student).filter(Student.id == student_id).first()
    if db_student == None:
        return None
    db.delete(db_student)
    db.commit()
    return db_student

def get_student_by_name(db: Session, student_name: str) -> (Student | None):
    return db.query(Student).filter(Student.name == student_name).first()

def new_year(db: Session) -> Student:
    db_student = db.query(Student).all()
    for student in db_student:
        student.year += 1
