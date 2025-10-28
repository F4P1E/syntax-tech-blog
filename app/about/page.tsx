import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border-4 border-foreground bg-background p-8">
            <h1 className="mb-4 text-5xl font-black uppercase leading-tight">About This Blog</h1>
          </div>

          <div className="space-y-6 border-4 border-foreground bg-background p-8">
            <section>
              <h2 className="mb-4 text-3xl font-black uppercase">Philosophy</h2>
              <p className="mb-4 text-lg leading-relaxed">
                This blog embraces brutalist design principles: raw aesthetics, visible structure, bold typography, and
                honest presentation. No unnecessary decoration. No hiding the construction. What you see is what you
                get.
              </p>
            </section>

            <div className="border-t-4 border-foreground pt-6">
              <h2 className="mb-4 text-3xl font-black uppercase">Technology</h2>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span>Next.js 15+ with App Router</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span>TypeScript for type safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span>Tailwind CSS for styling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span>Vercel Postgres + Drizzle ORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span>TASA Orbiter font</span>
                </li>
              </ul>
            </div>

            <div className="border-t-4 border-foreground pt-6">
              <h2 className="mb-4 text-3xl font-black uppercase">Design Principles</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-2 border-foreground p-4">
                  <h3 className="mb-2 font-black uppercase">Raw</h3>
                  <p>Unpolished, structural, honest</p>
                </div>
                <div className="border-2 border-foreground p-4">
                  <h3 className="mb-2 font-black uppercase">Bold</h3>
                  <p>Strong typography, high contrast</p>
                </div>
                <div className="border-2 border-foreground p-4">
                  <h3 className="mb-2 font-black uppercase">Minimal</h3>
                  <p>No unnecessary decoration</p>
                </div>
                <div className="border-2 border-foreground p-4">
                  <h3 className="mb-2 font-black uppercase">Structural</h3>
                  <p>Visible grids and borders</p>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-foreground pt-6">
              <h2 className="mb-4 text-3xl font-black uppercase">Contact</h2>
              <p className="text-lg leading-relaxed">
                This is a personal blog and creative space. Feel free to explore the posts and experience brutalist web
                design in action.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
