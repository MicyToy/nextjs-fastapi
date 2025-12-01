import os

from fastapi import FastAPI, Request
from starlette.responses import RedirectResponse

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv('.env'), override=False)

from api.tools.supabase_client import supabase
from api.app.todo import router

REDIRECT_URL = os.getenv("VERCEL_URL")

app = FastAPI()
app.include_router(router)

@app.get("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"


@app.get("/api/login/github")
def login_github():
    # Ensure redirect_to points back to our FastAPI callback under /api
    callback = f"{REDIRECT_URL.rstrip('/')}/todos"
    url = f"{supabase.supabase_url}/auth/v1/authorize?provider=github&redirect_to={callback}"
    return RedirectResponse(url, 302)

@app.get("/api/auth/callback")
def callback(request: Request):
    token = request.query_params.get("access_token")
    expires = request.query_params.get("expires_in")
    refresh_token = request.query_params.get("refresh_token")

    resp = RedirectResponse("/todos", 302)
    resp.set_cookie("access_token", token, expires,httponly=True)
    resp.set_cookie("refresh_token", refresh_token, expires=7*24*60*60,httponly=True)
    # return resp
    return resp