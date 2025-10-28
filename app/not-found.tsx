import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="border-4 border-foreground bg-background p-12 text-center">
            <h1 className="mb-4 text-9xl font-black">404</h1>
            <h2 className="mb-6 text-3xl font-black uppercase">Page Not Found</h2>
            <p className="mb-8 text-lg">The page you're looking for doesn't exist or has been moved.</p>
            <Link
              href="/"
              className="inline-block border-4 border-foreground bg-foreground px-8 py-4 font-black uppercase text-background transition-all hover:translate-x-1 hover:translate-y-1"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
