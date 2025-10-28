import Link from "next/link"
import { sql } from "@/lib/db"
import type { Post } from "@/lib/db/schema"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function HomePage() {
  const allPosts = await sql<Post[]>`
    SELECT * FROM posts 
    ORDER BY created_at DESC
  `

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mb-12 border-4 border-foreground bg-background p-8">
          <h1 className="mb-4 text-6xl font-black uppercase leading-none tracking-tight">
            Raw.
            <br />
            Structural.
            <br />
            Bold.
          </h1>
          <p className="text-xl font-bold">A personal blog embracing brutalist design principles.</p>
        </div>

        <section>
          <h2 className="mb-8 text-4xl font-black uppercase">Recent Posts</h2>
          <div className="grid gap-6">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="border-4 border-foreground bg-background p-6 transition-all hover:translate-x-1 hover:translate-y-1"
              >
                <Link href={`/post/${post.slug}`}>
                  <h3 className="mb-2 text-2xl font-black uppercase hover:underline">{post.title}</h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <time className="text-sm font-bold uppercase">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
