import { redirect, notFound } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { sql } from "@/lib/db"
import type { Post } from "@/lib/db/schema"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostForm } from "@/components/post-form"

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/admin/login")
  }

  const { id } = await params
  const postId = Number.parseInt(id)

  const post = await sql<Post[]>`
    SELECT * FROM posts 
    WHERE id = ${postId}
    LIMIT 1
  `

  if (post.length === 0) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border-4 border-foreground bg-background p-6">
            <h1 className="text-4xl font-black uppercase">Edit Post</h1>
          </div>
          <PostForm post={post[0]} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
