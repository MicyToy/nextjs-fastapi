import os

from fastapi import FastAPI, Request
from starlette.responses import RedirectResponse

from api.tools.supabase_client import supabase
from api.app.todo import router

REDIRECT_URL = os.getenv("GITHUB_REDIRECT")

app = FastAPI()
app.include_router(router)

@app.get("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"


@app.get("/login/github")
def login_github():
    url = f"{supabase.supabase_url}/auth/v1/authorize?provider=github&redirect_to={REDIRECT_URL}"
    return RedirectResponse(url, 302)

@app.get("/auth/callback")
def callback(request: Request):
    token = request.query_params.get("access_token")
    expires = request.query_params.get("expires_in")
    refresh_token = request.query_params.get("refresh_token")

    resp = RedirectResponse("/todo", 302,{"request": request})
    resp.set_cookie("access_token", token, expires,httponly=True)
    resp.set_cookie("refresh_token", refresh_token, expires=7*24*60*60,httponly=True)
    # return resp
    return resp