import { notFound } from "next/navigation"
import { sql } from "@/lib/db"
import type { Post } from "@/lib/db/schema"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarkdownContent } from "@/components/markdown-content"

export async function generateStaticParams() {
  const allPosts = await sql<{ slug: string }[]>`
    SELECT slug FROM posts
  `
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sql<Post[]>`
    SELECT * FROM posts 
    WHERE slug = ${slug}
    LIMIT 1
  `

  if (post.length === 0) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post[0].title} | Brutalist Blog`,
    description: post[0].excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sql<Post[]>`
    SELECT * FROM posts 
    WHERE slug = ${slug}
    LIMIT 1
  `

  if (post.length === 0) {
    notFound()
  }

  const currentPost = post[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 border-4 border-foreground bg-background p-8">
            <h1 className="mb-4 text-5xl font-black uppercase leading-tight text-balance">{currentPost.title}</h1>
            <div className="flex items-center gap-4 border-t-2 border-foreground pt-4">
              <time className="font-bold uppercase">
                {new Date(currentPost.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          <div className="border-4 border-foreground bg-background p-8">
            <MarkdownContent content={currentPost.content} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
