import { cookies } from 'next/headers'

const SUPABASE_URL = process.env.SUPABASE_URL as string
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY as string

export function getAuthHeaders() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access_token')?.value
  const headers: Record<string, string> = {
    apikey: SUPABASE_KEY,
    'Content-Type': 'application/json',
  }
  if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`
  return headers
}

export async function sbFetch(path: string, init?: RequestInit) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_KEY env')
  }
  const url = `${SUPABASE_URL.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`
  const headers = { ...getAuthHeaders(), ...(init?.headers as any) }
  const res = await fetch(url, { ...init, headers, cache: 'no-store' })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase error ${res.status}: ${text}`)
  }
  return res
}
