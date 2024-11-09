from fastapi import FastAPI
from routers.activity_router import router as activity_router
from routers.student_router import router as student_router
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
app.include_router(activity_router)
app.include_router(student_router)


@app.get("/")
def read_root():
    return {"message": "Welcome to this fantastic app!"}
