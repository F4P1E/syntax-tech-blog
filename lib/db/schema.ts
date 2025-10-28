export type Post = {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  created_at: Date
  updated_at: Date
}

export type NewPost = {
  title: string
  slug: string
  content: string
  excerpt: string
}
