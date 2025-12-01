import Link from 'next/link'
import { sbFetch } from '../../../lib/supabase-server'
import type { Category } from '../../../types/todos'

async function getCategory(id: number): Promise<Category | null> {
  const res = await sbFetch(`/rest/v1/categories?select=*&id=eq.${id}`)
  const list: Category[] = await res.json()
  return list[0] ?? null
}

type Props = { params: { id: string } }

export default async function EditCategoryPage({ params }: Props) {
  const id = Number(params.id)
  const cat = await getCategory(id)

  if (!cat) {
    return (
      <main className="mx-auto max-w-2xl p-6 space-y-6">
        <p className="text-red-600">未找到该分类。</p>
        <Link href="/categories" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">编辑分类</h1>
        <Link href="/categories" className="text-sm text-gray-600 hover:underline">返回列表</Link>
      </div>

      <form action={`/api/category/edit/${id}`} method="post" className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">名称</label>
          <input name="name" defaultValue={cat.name} required className="w-full rounded border px-3 py-2" />
        </div>
        <div className="pt-2">
          <button className="rounded bg-black text-white px-4 py-2">保存</button>
        </div>
      </form>
    </main>
  )
}
