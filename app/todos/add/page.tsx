import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function AddTodoPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">新增 Todo</h1>
        <Link href="/todos" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </div>

      <form action="/api/todo/add" method="post" className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">标题</label>
          <input name="title" required className="w-full rounded border px-3 py-2" placeholder="请输入标题" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">描述</label>
          <textarea name="description" rows={4} className="w-full rounded border px-3 py-2" placeholder="可选" />
        </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">标签</label>
              <select name={"tags"} multiple={true} className="w-full rounded border px-3 py-2">
                  <option value={"prod"} >prod</option>
                  <option value={"stage"} >stage</option>
                  <option value={"dev"}>dev</option>
              </select>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">截止日期</label>
            <input type="date" name="due_date" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">优先级</label>
            <input type="number" name="priority" min={0} defaultValue={1} className="w-full rounded border px-3 py-2" />
          </div>
        </div>

        <div className="pt-2">
          <button className="rounded bg-black text-white px-4 py-2">保存</button>
        </div>
      </form>
    </main>
  )
}
