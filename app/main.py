from fastapi import FastAPI
from routers.activity_router import router as activity_router
from routers.student_router import router as student_router

app = FastAPI()

app.include_router(activity_router)
app.include_router(student_router)


@app.get("/")
def read_root():
    return {"message": "Welcome to this fantastic app!"}
