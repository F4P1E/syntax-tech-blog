import Link from "next/link"

export function Header() {
  return (
    <header className="border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold uppercase tracking-tight hover:underline">
            Syntax Tech Blog
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="font-bold uppercase hover:underline">
              Home
            </Link>
            <Link href="/about" className="font-bold uppercase hover:underline">
              About
            </Link>
            <Link href="/admin" className="font-bold uppercase hover:underline">
              Admin
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
