from fastapi import APIRouter, HTTPException, Depends, Form, Body, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from schemas.student import StudentCreate
import crud.student_crud as student_crud
from database import get_db


router = APIRouter()

template = Jinja2Templates(directory="templates")

# GET -------------------------------------------------------------------
@router.get("/student/get/{student_id}")
async def get_student(student_id: int, db: Session = Depends(get_db)):
    db_student = student_crud.get_student_by_id(db, student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"student_id": db_student.id, "student_name": db_student.name, "password": db_student.password}

@router.get("/student/name/{student_name}")
async def get_student_by_name(student_name: str, db: Session = Depends(get_db)):
    student = student_crud.get_student_by_name(db, student_name)
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@router.get("/student/create/form", response_class=HTMLResponse)
async def student_form(request: Request):
    return template.TemplateResponse("create_student.html", {"request": request})



# POST -------------------------------------------------------------------

@router.post("/student/create/submit")
async def create_student(id: int = Form(...), name: str = Form(...), isMale: bool = Form(...), year: int = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    student = StudentCreate(id=id, name=name, isMale=isMale, year=year, isStudying=True, password=password)
    db_student = student_crud.create_student(db, student)
    if db_student is None:
        raise HTTPException(status_code=400, detail="Student already exists")
    return {"student_id": db_student.id, "student_name": db_student.name}

@router.post("/student/create")
async def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    db_student = student_crud.create_student(db, student)
    if db_student is None:
        raise HTTPException(status_code=400, detail="Student already exists")
    return {"student_id": db_student.id, "student_name": db_student.name}

@router.post("/student/login/")
async def student_login(response: Response, student_id: int = Body(...), password: str = Body(...), db: Session = Depends(get_db)):
    student = student_crud.login_student(db, student_id, password)
    if student is None:
        return {"status": 404}
    return {"status": 200, "student_id": student.id}


# PUT -------------------------------------------------------------------

# Delete -------------------------------------------------------------------

@router.delete("/student/delete/{student_id}")
async def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = student_crud.delete_student(db, student_id)
    if student == None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student



