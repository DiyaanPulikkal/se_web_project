Hopefully, I didn't forget to type any important info.

# TLDR:
-The folder "app" is back-end.
-Remember to install all dependencies.
-Recommended to start back-end first, then run front-end.

# How to run
1. You can move the folder "app" anywhere since it is not depended by the rest of the repo.
2. For back-end, you will need to "pip install fastapi sqlalchemy python-multipart jinja2 uvicorn".
3. From "app" folder, run "database.py" and then "uvicorn main:app --reload"
4. Go to your http://localhost:8000/docs to view the API endpoints and populate the database as you wish
5. Run "npm install [module-name]" to install all the required module (see package.json).
6. Run "npm run dev" from the root of the repo.
7. $$$PROFIT$$$
