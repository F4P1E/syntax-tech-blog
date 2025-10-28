import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"

export default async function LoginPage() {
  const authenticated = await isAuthenticated()

  if (authenticated) {
    redirect("/admin")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-8 border-4 border-foreground bg-background p-8">
            <h1 className="mb-2 text-4xl font-black uppercase">Admin Login</h1>
            <p className="text-muted-foreground">Enter password to access admin dashboard</p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
