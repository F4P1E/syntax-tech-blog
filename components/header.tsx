import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Syntax%20Tech%20Blog-ujUditWtflBPDNSzvSn4mp9FIirTqo.png"
              alt="Syntax Tech Blog Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold uppercase tracking-tight">Syntax Tech Blog</span>
          </Link>
          {/* </CHANGE> */}
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
