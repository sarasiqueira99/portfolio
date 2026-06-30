import Link from 'next/link'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/90 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-stone-800 tracking-wide hover:text-stone-500 transition-colors">
          Sara Siqueira
        </Link>
        <nav className="flex items-center gap-10 text-sm text-stone-500">
          <Link href="/work" className="hover:text-stone-900 transition-colors">Work</Link>
          <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
