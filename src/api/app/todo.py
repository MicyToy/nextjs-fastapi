from fastapi import Form, APIRouter
from starlette.requests import Request
from starlette.responses import HTMLResponse, RedirectResponse

from api.tools.supabase_client import supabase
from api.app.auth import get_current_user
router = APIRouter(prefix="", tags=["todos"])

# todos listing
# @router.get("/todo", response_class=HTMLResponse)
# def index(request: Request):
#     user = get_current_user(request)
#     if not user:
#         return RedirectResponse("/login")
#
#     todos = supabase.postgrest.from_table("todos").select("*").eq("user_id", user).execute().data
#     # todos = supabase.table("todos").select("*").eq("user_id", user).execute().data
#     return templates.TemplateResponse("todos.html", {"request": request, "todos": todos})

# add todos page
# @router.get("/todo/add")
# def add_todo_page(request: Request):
#     user = get_current_user(request)
#     if not user:
#         return RedirectResponse("/login")
#
#     return templates.TemplateResponse("add_todo.html", {"request": request})

# add todos API
@router.post("/todo/add")
def add_todo(request: Request, title: str = Form(...), description: str = Form(""),
             due_date: str = Form(""), priority: int = Form(1),
             tags: list[str] = Form([])):
    user = get_current_user(request)
    supabase.table("todos").insert({"title": title, "description": description,
                                    "user_id": user,
                                    "due_date": due_date, "priority": priority,
                                    "tags": tags}).execute()
    return RedirectResponse("/todo", status_code=302)

# todos page
# @router.get("/todo/edit/{todo_id}")
# def edit_todo_page(request: Request, todo_id: int):
#     user = get_current_user(request)
#     todo = supabase.table("todos").select("*").eq("id", todo_id).single().execute().data
#     return templates.TemplateResponse("edit_todo.html", {"request": request, "todo": todo})

# 编辑todos API
@router.post("/todo/edit/{todo_id}")
def edit_todo(todo_id: int, request: Request, title: str = Form(...), description: str = Form(""),
             due_date: str = Form(""), priority: int = Form(1),
              tags: list[str] = Form([])):
    supabase.table("todos").update({"title": title, "description": description,
                                    "due_date": due_date, "priority": priority,
                                    "tags": tags}).eq("id", todo_id).execute()
    return RedirectResponse("/todo", status_code=302)

# 完成
@router.get("/todo/complete/{todo_id}")
def complete(todo_id: int, request: Request):
    supabase.table("todos").update({"status": "done"}).eq("id", todo_id).execute()
    return RedirectResponse("/todo", status_code=302)

# @router.get("/category/add")
# def add_category_page(request: Request):
#     return templates.TemplateResponse("add_category.html", {"request": request})

@router.post("/category/add")
def add_category(request: Request, name: str = Form(...)):
    user = get_current_user(request)
    supabase.table("categories").insert({"name": name, "user_id": user}).execute()
    return RedirectResponse("/", status_code=302)
