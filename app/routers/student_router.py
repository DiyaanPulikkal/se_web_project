from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from schemas.student import StudentCreate
import crud.student_crud as student_crud
from database import get_db

router = APIRouter()


@router.post("/student/create")
async def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    db_student = student_crud.create_student(db, student)
    if db_student is None:
        raise HTTPException(status_code=400, detail="Student already exists")
    return {"student_id": db_student.id, "student_name": db_student.name}


@router.get("/student/{student_id}")
async def get_student(student_id: int, db: Session = Depends(get_db)):
    db_student = student_crud.get_student_by_id(db, student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"student_id": db_student.id, "student_name": db_student.name}


@router.delete("/students/delete/{student_id}")
async def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = student_crud.delete_student(db, student_id)
    if student == None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


@router.get("/students/name/{student_name}")
async def get_student_by_name(student_name: str, db: Session = Depends(get_db)):
    student = student_crud.get_student_by_name(db, student_name)
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student
