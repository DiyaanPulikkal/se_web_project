from sqlalchemy.orm import Session
from models.email_model import Email
from schemas.email import EmailCreate

def add_email(db: Session, email: EmailCreate) -> Email:
    db_email = Email(address=email.address)
    if db.query(Email).filter(Email.address == db_email.address).first() != None:
        return None
    db.add(db_email)
    db.commit()
    db.refresh(db_email)
    return db_email

def remove_email(db: Session, address: str) -> Email:
    db_email = db.query(Email).filter(Email.address == address).first()
    if db_email == None:
        return None
    db.delete(db_email)
    db.commit()
    return db_email

def get_all_emails(db: Session):
    return db.query(Email).all()