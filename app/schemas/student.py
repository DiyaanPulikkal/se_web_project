from pydantic import BaseModel

class StudentCreate(BaseModel):
    id: int
    name: str
    isMale: bool
    year: int
    isStudying: bool
    password: str
    