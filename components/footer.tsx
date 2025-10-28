export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-bold uppercase">© {new Date().getFullYear()} Brutalist Blog</p>
          <p className="text-sm">Built with Next.js, TypeScript, and raw design principles.</p>
        </div>
      </div>
    </footer>
  )
}
