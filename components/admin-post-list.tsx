"use client"

import { useState } from "react"
import Link from "next/link"
import type { Post } from "@/lib/db/schema"
import { deletePost } from "@/app/admin/actions"

export function AdminPostList({ posts }: { posts: Post[] }) {
  const [deletingId, setDeletingId] = useState<number | null>(null)

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this post?")) return

    setDeletingId(id)
    await deletePost(id)
    setDeletingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-4 border-foreground bg-accent p-6">
        <div>
          <h2 className="text-3xl font-black uppercase">Manage Posts</h2>
          <p className="mt-1 text-sm font-bold uppercase text-muted-foreground">
            {posts.length} {posts.length === 1 ? "Post" : "Posts"} Total
          </p>
        </div>
        <Link
          href="/admin/new"
          className="border-4 border-foreground bg-foreground px-8 py-4 font-black uppercase text-background transition-all hover:translate-x-1 hover:translate-y-1"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="border-4 border-foreground bg-muted p-12 text-center">
          <p className="mb-4 text-2xl font-black uppercase">No Posts Yet</p>
          <p className="mb-6 text-muted-foreground">Create your first blog post to get started.</p>
          <Link
            href="/admin/new"
            className="inline-block border-4 border-foreground bg-foreground px-8 py-4 font-black uppercase text-background transition-all hover:translate-x-1 hover:translate-y-1"
          >
            Create First Post
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border-4 border-foreground bg-background p-6 transition-all hover:translate-x-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-black uppercase">{post.title}</h3>
                  <p className="mb-3 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <time className="font-bold uppercase">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="font-bold uppercase text-muted-foreground">Slug: /{post.slug}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/edit/${post.id}`}
                    className="border-2 border-foreground bg-background px-4 py-2 font-bold uppercase transition-all hover:translate-x-1 hover:translate-y-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deletingId === post.id}
                    className="border-2 border-foreground bg-destructive px-4 py-2 font-bold uppercase text-destructive-foreground transition-all hover:translate-x-1 hover:translate-y-1 disabled:opacity-50"
                  >
                    {deletingId === post.id ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
