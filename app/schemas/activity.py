from pydantic import BaseModel

class ActivityCreate(BaseModel):
    index: int
    name: str
    description: str
    startRegistration: str
    endRegistration: str
    maxParticipants: int
    isGroup: bool