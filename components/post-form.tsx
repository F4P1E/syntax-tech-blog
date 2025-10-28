"use client"

import { useActionState } from "react"
import type { Post } from "@/lib/db/schema"
import { createPost, updatePost } from "@/app/admin/actions"

interface PostFormProps {
  post?: Post
}

export function PostForm({ post }: PostFormProps) {
  const action = post ? updatePost.bind(null, post.id) : createPost
  const [state, formAction, pending] = useActionState(async (_prevState: unknown, formData: FormData) => {
    await action(formData)
    return null
  }, null)

  return (
    <form action={formAction} className="space-y-6">
      <div className="border-4 border-foreground bg-background p-6">
        <label htmlFor="title" className="mb-2 block font-bold uppercase">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={post?.title}
          className="w-full border-4 border-foreground bg-background px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-foreground"
          required
          disabled={pending}
        />
      </div>

      <div className="border-4 border-foreground bg-background p-6">
        <label htmlFor="excerpt" className="mb-2 block font-bold uppercase">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          defaultValue={post?.excerpt}
          rows={3}
          className="w-full border-4 border-foreground bg-background px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-foreground"
          required
          disabled={pending}
        />
      </div>

      <div className="border-4 border-foreground bg-background p-6">
        <label htmlFor="content" className="mb-2 block font-bold uppercase">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={post?.content}
          rows={20}
          className="w-full border-4 border-foreground bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-4 focus:ring-foreground"
          required
          disabled={pending}
        />
        <p className="mt-2 text-sm text-muted-foreground">Supports basic markdown: # Headers, **bold**, - lists</p>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={pending}
          className="flex-1 border-4 border-foreground bg-foreground px-6 py-4 font-black uppercase text-background transition-all hover:translate-x-1 hover:translate-y-1 disabled:opacity-50"
        >
          {pending ? "Saving..." : post ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  )
}
