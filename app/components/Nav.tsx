import Link from 'next/link'

export default function Nav() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-stone-800 font-medium tracking-wide hover:text-stone-600 transition-colors">
          Sara Siqueira
        </Link>
        <nav className="flex items-center gap-8 text-sm text-stone-600">
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
