from fastapi import APIRouter, Depends, Request, Form, Body
from schemas.email import EmailCreate
from database import get_db
import crud.email_crud as email_crud
from fastapi.templating import Jinja2Templates
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

router = APIRouter()

template = Jinja2Templates(directory="templates")

@router.post("/email/add_email")
def add_email(email: EmailCreate, db = Depends(get_db)):
    email_db = email_crud.add_email(db, email)
    if email_db == None:
        return {"status": 400, "message": "Email already exists"}
    return {"status": 200}

@router.delete("/email/remove_email")
def remove_email(address: str = Body(...), db = Depends(get_db)):
    email_db = email_crud.remove_email(db, address)
    if email_db == None:
        return {"status": 400, "message": "Email does not exist"}
    return {"status": 200}

@router.get("/email/send_email/form")
def send_email_form(request: Request, db = Depends(get_db)):
    email = email_crud.get_all_emails(db)[0]
    print(str(email.address))
    return template.TemplateResponse("send_email.html", {"request": request})

@router.post("/email/send_email/submit")
def send_email_submit(sender: str = Form(...), sender_password: str = Form(...),subject: str = Form(...), message: str = Form(...), db = Depends(get_db)):
    all_recipients_e = email_crud.get_all_emails(db)
    if len(all_recipients_e) == 0:
        return {"status": 400, "message": "No emails to send to"}
    
    all_recipients = []

    for email in all_recipients_e:
        all_recipients.append(email.address)
   
    print(sender)
    print(sender_password)
    message_mime = MIMEMultipart()
    message_mime["From"] = sender
    message_mime["To"] = ", ".join(all_recipients)
    message_mime["Subject"] = subject
    message_mime.attach(MIMEText(message, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender, sender_password)
            server.sendmail(sender, all_recipients, message_mime.as_string())
    except smtplib.SMTPAuthenticationError:
        return {"status": 400, "message": "Authentication failed. Please check your email and password."}
    except smtplib.SMTPException as e:
        return {"status": 400, "message": f"SMTP error occurred: {str(e)}"}
    except Exception as e:
        return {"status": 400, "message": f"An unexpected error occurred: {str(e)}"}
    return {"status": 200, "message": "Email sent"}



