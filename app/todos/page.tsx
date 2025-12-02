import Link from 'next/link'
import { sbFetch } from '../lib/supabase-server'
import type { Todo } from '../types/todos'
import Script from "next/script";

async function getTodos(): Promise<Todo[]> {
  const res = await sbFetch('/rest/v1/todos?select=*&order=id.desc')
  return res.json()
}

export default async function TodosPage() {
  let todos: Todo[] = []
  try {
    todos = await getTodos()
  } catch (e: any) {
    // ignore; likely not logged in
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Todos</h1>
        <div className="flex gap-3">
          <Link href="/" className="text-sm text-gray-600 hover:underline">返回首页</Link>
          <Link href="/todos/add" className="rounded bg-black text-white px-3 py-2 text-sm">新增 Todo</Link>
        </div>
      </div>

      {(!todos || todos.length === 0) && (
        <p className="text-gray-500">暂无数据，点击“新增 Todo”创建一个。</p>
      )}

      <ul className="divide-y rounded border">
        {todos.map(t => (
          <li key={t.id} className="p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium truncate">{t.title}</span>
                {t.status === 'done' && (
                  <span className="text-xs rounded bg-green-100 text-green-700 px-2 py-0.5">完成</span>
                )}
              </div>
              {t.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{t.description}</p>
              )}
              <div className="mt-1 text-xs text-gray-500 flex gap-3">
                {t.due_date && <span>截止：{t.due_date}</span>}
                {typeof t.priority === 'number' && <span>优先级：{t.priority}</span>}
              </div>
              <div className="mt-1 text-xs text-gray-500 flex gap-3">
                {t.tags && <span>标签：{t.tags.join(', ')}</span>}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {t.status !== 'done' && (
                <a href={`/api/todo/complete/${t.id}`} className="text-sm rounded border px-3 py-1.5 hover:bg-gray-50">完成</a>
              )}
              <Link href={`/todos/${t.id}/edit`} className="text-sm rounded border px-3 py-1.5 hover:bg-gray-50">编辑</Link>
            </div>
          </li>
        ))}
      </ul>
        <Script strategy={"lazyOnload"} id={"getAccessTokenScript"}>
            {
                `function getAccessToken() {
                    const hash = window.location.hash.substring(1);  // 去掉 #
                    console.log(hash);
                    const params = new URLSearchParams(hash);
                    console.log(params);
        
                    const access_token = params.get("access_token");
                    const expires_in = params.get("expires_in");
                    const refresh_token = params.get("refresh_token");
                    console.log(access_token, expires_in, refresh_token);
        
                    if (access_token) {
                        fetch("/api/auth/callback?access_token="+ access_token+"&refresh_token="+refresh_token+"&expires_in=" + expires_in)
                        .then(res => res.json())
                    }
                    else {
                        console.error("未获取到 access_token")
                    }
                }

                getAccessToken()`}
        </Script>
    </main>
  )
}
