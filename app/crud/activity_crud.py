from sqlalchemy.orm import Session
from models.activity_model import Activity
from schemas.activity import ActivityCreate
from helper.participant import Participant
from typing import List
import json


def create_activity(db: Session, activity: ActivityCreate) -> Activity:
    activity_list = db.query(Activity).all()
    index = activity_list[-1].index + 1
    db_activity = Activity(index=index, name=activity.name, description=activity.description, startRegistration=activity.startRegistration,
                           endRegistration=activity.endRegistration, participants=[], maxParticipants=activity.maxParticipants, isGroup=activity.isGroup)
    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)
    return db_activity


def get_activities(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Activity).offset(skip).limit(limit).all()


def delete_activity(db: Session, activity_index: int) -> Activity:
    db_activity = db.query(Activity).filter(
        Activity.index == activity_index).first()
    if db_activity is None:
        return None

    db.delete(db_activity)
    db.commit()
    return db_activity


def get_activity(db: Session, activity_index: int) -> Activity:
    return db.query(Activity).filter(Activity.index == activity_index).first()


def get_activity_by_name(db: Session, activity_name: str) -> Activity:
    return db.query(Activity).filter(Activity.name == activity_name).first()


def add_participant_to_activity(db: Session, activity_index: int, participants_id: List[int], group_name: str = None):
    db_activity = db.query(Activity).filter(
        Activity.index == activity_index).first()

    # check if any participant_id is already in the activity
    for participant_id in participants_id:
        for participant in db_activity.participants:
            if participant_id == participant.id:
                return None

    if db_activity.isGroup and group_name is None:
        return None

    toAdd = json.loads(db_activity.participants)
    if db_activity.isGroup:
        toAdd.append(participants_id)
    else:
        toAdd.extend(participants_id)

    db_activity.participants = json.dumps(toAdd)
    db.commit()
    db.refresh(db_activity)
    return db_activity
