import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold">欢迎使用 Todos 应用</h1>
        <p className="text-gray-600">请使用 GitHub 账号登录后管理你的待办与分类。</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/login/github"
            className="inline-flex items-center gap-2 rounded-md bg-black text-white px-5 py-3 hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" clipRule="evenodd" />
            </svg>
            使用 GitHub 登录
          </a>

          <div className="flex gap-4">
            <Link href="/todos" className="rounded-md border px-4 py-3 hover:bg-gray-50">Todos 列表</Link>
            <Link href="/categories" className="rounded-md border px-4 py-3 hover:bg-gray-50">分类列表</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
