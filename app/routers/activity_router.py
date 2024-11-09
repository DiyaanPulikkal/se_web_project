from fastapi import APIRouter, HTTPException, Depends, Query
from schemas.activity import ActivityCreate
from database import get_db
import crud.activity_crud as activity_crud
from typing import List, Optional

router = APIRouter()


@router.get("/activities/{activity_index}")
async def get_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.get_activity_by_index(db, activity_index)
    if activity == None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity


@router.get("/activities")
async def get_activities(db=Depends(get_db)):
    return activity_crud.get_all_activities(db)


@router.put("/activity/add_participant/{activity_index}/")
async def add_participant_to_activity(activity_index: int, participants_id: List[int] = Query(default=None), group_name: Optional[str] = None, db=Depends(get_db)):
    if participants_id == None or len(participants_id) == 0:
        raise HTTPException(status_code=400, detail="No participants_id provided")
    result = activity_crud.add_participant_to_activity(db, activity_index, participants_id, group_name)
    if result == None:
        raise HTTPException(status_code=404, detail="Failed to add participant to activity")
    return result


@router.post("/activity/create_activity/")
async def create_activity(activity: ActivityCreate, db=Depends(get_db)):
    return activity_crud.create_activity(db, activity)


@router.delete("/activity/delete_activity/{activity_index}")
async def delete_activity(activity_index: int, db=Depends(get_db)):
    activity = activity_crud.delete_activity_by_index(db, activity_index)
    if activity == None:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity
