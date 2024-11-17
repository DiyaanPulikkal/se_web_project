from pydantic import BaseModel

class ActivityCreate(BaseModel):
    name: str
    description: str
    image: str
    startRegistration: str
    endRegistration: str
    maxParticipants: int
    isGroup: bool
    link: str