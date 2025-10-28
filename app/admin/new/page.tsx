import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostForm } from "@/components/post-form"

export default async function NewPostPage() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border-4 border-foreground bg-background p-6">
            <h1 className="text-4xl font-black uppercase">Create New Post</h1>
          </div>
          <PostForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
