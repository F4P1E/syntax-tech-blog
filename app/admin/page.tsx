import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { sql } from "@/lib/db"
import type { Post } from "@/lib/db/schema"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminPostList } from "@/components/admin-post-list"
import { LogoutButton } from "@/components/logout-button"

export default async function AdminPage() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/admin/login")
  }

  const allPosts = await sql<Post[]>`
    SELECT * FROM posts 
    ORDER BY created_at DESC
  `

  const totalPosts = allPosts.length
  const publishedThisMonth = allPosts.filter((post) => {
    const postDate = new Date(post.createdAt)
    const now = new Date()
    return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear()
  }).length

  const latestPost = allPosts[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mb-8 border-4 border-foreground bg-background p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-5xl font-black uppercase leading-none">Admin Dashboard</h1>
              <p className="text-lg font-bold uppercase text-muted-foreground">Syntax Tech Blog</p>
            </div>
            <LogoutButton />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="border-4 border-foreground bg-accent p-6">
              <div className="text-sm font-bold uppercase text-muted-foreground">Total Posts</div>
              <div className="mt-2 text-4xl font-black">{totalPosts}</div>
            </div>
            <div className="border-4 border-foreground bg-accent p-6">
              <div className="text-sm font-bold uppercase text-muted-foreground">This Month</div>
              <div className="mt-2 text-4xl font-black">{publishedThisMonth}</div>
            </div>
            <div className="border-4 border-foreground bg-accent p-6">
              <div className="text-sm font-bold uppercase text-muted-foreground">Latest Post</div>
              <div className="mt-2 text-lg font-black uppercase leading-tight">
                {latestPost ? latestPost.title.substring(0, 30) + "..." : "No posts yet"}
              </div>
            </div>
          </div>
        </div>

        <AdminPostList posts={allPosts} />
      </main>
      <Footer />
    </div>
  )
}
