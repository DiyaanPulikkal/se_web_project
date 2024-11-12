from sqlalchemy.orm import Session
from models.activity_model import Activity
from schemas.activity import ActivityCreate
from typing import List
import json
import datetime

# CREATE ---------------------------------------------------------------------

def create_activity(db: Session, activity: ActivityCreate) -> Activity:
    activity_list = db.query(Activity).all()
    index = 1
    if len(activity_list) != 0:
        index = activity_list[len(activity_list) - 1].index + 1    
    db_activity = Activity(index=index, 
                           name=activity.name, 
                           description=activity.description,
                           image=activity.image, 
                           startRegistration=activity.startRegistration,
                           endRegistration=activity.endRegistration, 
                           participants=json.dumps([]), 
                           maxParticipants=activity.maxParticipants, 
                           isGroup=activity.isGroup
    )
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity


# READ -----------------------------------------------------------------------

def get_all_activities(db: Session):
    return db.query(Activity).all()

def get_activity_by_index(db: Session, activity_index: int) -> (Activity | None):
    return db.query(Activity).filter(Activity.index == activity_index).first()

def get_activity_by_name(db: Session, activity_name: str) -> (Activity | None):
    return db.query(Activity).filter(Activity.name == activity_name).first()

def get_upcoming_activities(db: Session):
    return db.query(Activity).filter(datetime.datetime.strptime(Activity.endRegistration, "%Y-%m-%d").date() > datetime.datetime.now().date()).all()

def get_archived_activities(db: Session):
    return db.query(Activity).filter(datetime.datetime.strptime(Activity.endRegistration, "%Y-%m-%d").date() <= datetime.datetime.now().date()).all()

# UPDATE ---------------------------------------------------------------------
def add_participant_to_activity(db: Session, activity_index: int, participants_id: List[int], group_name: str = None) -> (Activity | None):
    db_activity = db.query(Activity).filter(Activity.index == activity_index).first()

    if db_activity == None:
        return None

    # check if any participant_id is already in the activity
    for participant_id in participants_id:
        for participant in json.loads(db_activity.participants):
            if (db_activity.isGroup and participant_id in participant["participants"]) or (not db_activity.isGroup and participant_id == participant):
                return None

    toAdd = json.loads(db_activity.participants)
    if len(toAdd) == db_activity.maxParticipants:
        return None

    if db_activity.isGroup:
        if group_name == None:
            group_name = "Group " + str(len(toAdd) + 1)
        toAdd.append({"group_name": group_name, "participants": participants_id})        
    else:
        toAdd.extend(participants_id)

    db_activity.participants = json.dumps(toAdd)
    db.commit()
    db.refresh(db_activity)
    return db_activity

# DELETE ---------------------------------------------------------------------

def delete_activity_by_index(db: Session, activity_index: int) -> (Activity | None):
    db_activity = db.query(Activity).filter(Activity.index == activity_index).first()
    if db_activity is None:
        return None

    db.delete(db_activity)
    db.commit()
    return db_activity