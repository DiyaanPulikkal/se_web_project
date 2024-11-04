from fastapi import APIRouter, HTTPException, Depends, Query
from schemas.activity import ActivityCreate
from database import get_db
import crud.activity_crud as activity_crud
from typing import List

router = APIRouter()


@router.get("/activities/{activity_index}")
async def get_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.get_activity(db, activity_index)
    if activity is None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity


@router.get("/activities")
async def get_activities(skip: int = 0, limit: int = 100, db=Depends(get_db)):
    return activity_crud.get_activities(db, skip, limit)


@router.put("/activity/add_participant/{activity_index}/")
async def add_participant_to_activity(activity_index: int, participants_id: List[int] = Query(default=None), db=Depends(get_db)):
    if participants_id is None or len(participants_id) == 0:
        raise HTTPException(
            status_code=400, detail="No participants_id provided")
    result = add_participant_to_activity(db, activity_index, participants_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Activit")


@router.post("/activity/create_activity/")
async def create_activity(activity: ActivityCreate, db=Depends(get_db)):
    return activity_crud.create_activity(db, activity)


@router.delete("/activity/delete_activity/{activity_index}")
async def delete_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.delete_activity(db, activity_index)
    if activity is None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity
