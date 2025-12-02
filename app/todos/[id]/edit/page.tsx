import Link from 'next/link'
import { sbFetch } from '../../../lib/supabase-server'
import type { Todo } from '../../../types/todos'

async function getTodo(id: number): Promise<Todo | null> {
  const res = await sbFetch(`/rest/v1/todos?select=*&id=eq.${id}`)
  const list: Todo[] = await res.json()
  return list[0] ?? null
}

type Props = { params: { id: string } }

export default async function EditTodoPage({ params }: Props) {
  const id = Number(params.id)
  const todo = await getTodo(id)

  if (!todo) {
    return (
      <main className="mx-auto max-w-2xl p-6 space-y-6">
        <p className="text-red-600">未找到该 Todo。</p>
        <Link href="/todos" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">编辑 Todo</h1>
        <Link href="/todos" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </div>

      <form action={`/api/todo/edit/${id}`} method="post" className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">标题</label>
          <input name="title" defaultValue={todo.title} required className="w-full rounded border px-3 py-2" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">描述</label>
          <textarea name="description" rows={4} defaultValue={todo.description ?? ''} className="w-full rounded border px-3 py-2" />
        </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">标签</label>
              <select name={"tags"} multiple={true} className="w-full rounded border px-3 py-2">
                  <option value={"prod"} selected={todo.tags?.includes("prod")}>prod</option>
                  <option value={"stage"} selected={todo.tags?.includes("stage")}>stage</option>
                  <option value={"dev"} selected={todo.tags?.includes("dev")}>dev</option>
              </select>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">截止日期</label>
            <input type="date" name="due_date" defaultValue={todo.due_date ?? ''} className="w-full rounded border px-3 py-2" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">优先级</label>
            <input type="number" name="priority" min={0} defaultValue={todo.priority ?? 1} className="w-full rounded border px-3 py-2" />
          </div>
        </div>

        <div className="pt-2">
          <button className="rounded bg-black text-white px-4 py-2">保存</button>
        </div>
      </form>
    </main>
  )
}
