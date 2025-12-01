import os
from supabase import create_client, Client
from supabase.client import ClientOptions

def init_supabase() -> Client:
    _url: str = os.environ.get("SUPABASE_URL")
    _key: str = os.environ.get("SUPABASE_KEY")
    supabase_client: Client = create_client(
        _url,
        _key,
        options=ClientOptions(
            postgrest_client_timeout=10,
            storage_client_timeout=10,
            schema="public",
        )
    )
    return supabase_client

supabase: Client = init_supabase()