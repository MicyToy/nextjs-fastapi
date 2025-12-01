export type UUID = string

export interface Todo {
  created_at: string | null
  description: string | null
  due_date: string | null
  id: number
  priority: number | null
  status: string | null
  tags: string[] | null
  title: string
  updated_at: string | null
  user_id: UUID
}

export interface Category {
  created_at: string | null
  id: number
  name: string
  user_id: UUID
}

export interface TodoCategory {
  category_id: number
  todo_id: number
}
