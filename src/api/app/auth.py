import os

import jwt
from fastapi import Request
from supabase_auth import AuthResponse

from src.tools.supabase_client import supabase

JWT_SECRET = os.getenv("JWT_SECRET")

def get_current_user(request: Request):

    token = request.cookies.get("access_token")
    if not token:
        return None

    try:
        session = supabase.auth.get_session()
        if not session:
            # 检查access_token是否有效
            jwt_token = jwt.decode_complete(token, JWT_SECRET, algorithms=["HS256"], audience="authenticated")
            token_header = jwt_token.get('header')
            new_token = jwt.encode(jwt_token.get('payload'), 'sb_secret_N7UND0UgjKTVK-Uodkm0Hg_xSvEMPvz',
                                   headers=token_header,
                                   algorithm=token_header.get('alg'))
            print(f'new local token {new_token}')
            refresh_token = request.cookies.get("refresh_token")
            auth_resp: AuthResponse = supabase.auth.set_session(token, refresh_token)
            return auth_resp.user.id

        return session.user.id  # user_id
    except Exception as e:
        print(e)
        return None
