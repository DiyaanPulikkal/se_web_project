from pydantic import BaseModel, field_validator
import re

class EmailCreate(BaseModel):
    address: str
    
    @field_validator('email')
    def email_validator(cls, value):
        if not re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", value):
            raise ValueError('Invalid email address')
        return value

