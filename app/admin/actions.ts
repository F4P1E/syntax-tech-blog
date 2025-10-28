"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { sql } from "@/lib/db"
import { isAuthenticated } from "@/lib/auth"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export async function createPost(formData: FormData) {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    throw new Error("Unauthorized")
  }

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string

  const slug = slugify(title)

  await sql`
    INSERT INTO posts (title, slug, content, excerpt, created_at, updated_at)
    VALUES (${title}, ${slug}, ${content}, ${excerpt}, NOW(), NOW())
  `

  revalidatePath("/")
  revalidatePath("/admin")
  redirect("/admin")
}

export async function updatePost(id: number, formData: FormData) {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    throw new Error("Unauthorized")
  }

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string

  const slug = slugify(title)

  await sql`
    UPDATE posts 
    SET title = ${title}, 
        slug = ${slug}, 
        content = ${content}, 
        excerpt = ${excerpt}, 
        updated_at = NOW()
    WHERE id = ${id}
  `

  revalidatePath("/")
  revalidatePath("/admin")
  revalidatePath(`/post/${slug}`)
  redirect("/admin")
}

export async function deletePost(id: number) {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    throw new Error("Unauthorized")
  }

  await sql`
    DELETE FROM posts 
    WHERE id = ${id}
  `

  revalidatePath("/")
  revalidatePath("/admin")
}
