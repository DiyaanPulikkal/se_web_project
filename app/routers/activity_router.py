from fastapi import APIRouter, HTTPException, Depends, Query, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import List, Optional
from schemas.activity import ActivityCreate
from database import get_db
import crud.activity_crud as activity_crud



router = APIRouter()

templates = Jinja2Templates(directory="templates")

# GET --------------------------------------------------------------------------------------------------------------
@router.get("/activity/index/{activity_index}")
async def get_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.get_activity_by_index(db, activity_index)
    if activity == None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity


@router.get("/activity/all/")
async def get_activities(db=Depends(get_db)):
    return activity_crud.get_all_activities(db)

@router.get("/activity/create/form/", response_class=HTMLResponse)
async def create_activity_form(request: Request):
    return templates.TemplateResponse("create_activity.html", {"request": request})

@router.get("/activity/upcoming/")
async def get_upcoming_activities(db=Depends(get_db)):
    return activity_crud.get_upcoming_activities(db)

@router.get("/activity/archived/")
async def get_archived_activities(db=Depends(get_db)):
    return activity_crud.get_archived_activities(db)

# PUT --------------------------------------------------------------------------------------------------------------

@router.put("/activity/add_participant/{activity_index}/")
async def add_participant_to_activity(activity_index: int, participants_id: List[int] = Query(default=None), group_name: Optional[str] = None, db=Depends(get_db)):
    if participants_id == None or len(participants_id) == 0:
        raise HTTPException(status_code=400, detail="No participants_id provided")
    result = activity_crud.add_participant_to_activity(db, activity_index, participants_id, group_name)
    if result == None:
        raise HTTPException(status_code=404, detail="Failed to add participant to activity")
    return result

# POST --------------------------------------------------------------------------------------------------------------

@router.post("/activity/create_activity/")
async def create_activity(activity: ActivityCreate, db=Depends(get_db)):
    return activity_crud.create_activity(db, activity)

@router.post("/activity/create/submit/")
async def create_activity_submit(name: str = Form(...), 
                                 description: str = Form(...), 
                                 startRegistration: str = Form(...), 
                                 endRegistration: str = Form(...), 
                                 maxParticipants: int = Form(...), 
                                 isGroup: bool = Form(...), 
                                 image: str = Form(...), 
                                 db=Depends(get_db)):
    activity = ActivityCreate(name=name,
                                description=description,
                                startRegistration=startRegistration,
                                endRegistration=endRegistration,
                                maxParticipants=maxParticipants,
                                isGroup=isGroup,
                                image=image
    )
    return activity_crud.create_activity(db, activity)

# DELETE --------------------------------------------------------------------------------------------------------------

@router.delete("/activity/delete_activity/{activity_index}")
async def delete_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.delete_activity_by_index(db, activity_index)
    if activity == None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity




