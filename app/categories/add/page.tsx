import Link from 'next/link'

export default function AddCategoryPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">新增分类</h1>
        <Link href="/categories" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </div>

      <form action="/api/category/add" method="post" className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">名称</label>
          <input name="name" required className="w-full rounded border px-3 py-2" placeholder="请输入分类名称" />
        </div>

        <div className="pt-2">
          <button className="rounded bg-black text-white px-4 py-2">保存</button>
        </div>
      </form>
    </main>
  )
}
