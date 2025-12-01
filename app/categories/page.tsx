import Link from 'next/link'
import { sbFetch } from '../lib/supabase-server'
import type { Category } from '../types/todos'

async function getCategories(): Promise<Category[]> {
  const res = await sbFetch('/rest/v1/categories?select=*&order=id.desc')
  return res.json()
}

export default async function CategoriesPage() {
  let cats: Category[] = []
  try { cats = await getCategories() } catch {}

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">分类</h1>
        <div className="flex gap-3">
          <Link href="/" className="text-sm text-gray-600 hover:underline">返回首页</Link>
          <Link href="/categories/add" className="rounded bg-black text-white px-3 py-2 text-sm">新增分类</Link>
        </div>
      </div>

      {(!cats || cats.length === 0) && (
        <p className="text-gray-500">暂无分类，点击“新增分类”创建一个。</p>
      )}

      <ul className="divide-y rounded border">
        {cats.map(c => (
          <li key={c.id} className="p-4 flex items-center justify-between">
            <div className="min-w-0">
              <div className="font-medium truncate">{c.name}</div>
              <div className="text-xs text-gray-500">ID: {c.id}</div>
            </div>
            <div className="shrink-0">
              <Link href={`/categories/${c.id}/edit`} className="text-sm rounded border px-3 py-1.5 hover:bg-gray-50">编辑</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
