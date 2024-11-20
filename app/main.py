from fastapi import FastAPI
from routers.activity_router import router as activity_router
from routers.student_router import router as student_router
from routers.email_router import router as email_router
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

app.mount("/static", StaticFiles(directory="static"), name="static")
app.include_router(activity_router)
app.include_router(student_router)
app.include_router(email_router)
