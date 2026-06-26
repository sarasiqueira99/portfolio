import Nav from '../components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-20 flex-1">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-light text-stone-800 mb-10">About</h1>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              I&apos;m a UX researcher based in [City]. I&apos;ve spent the last [X] years helping product
              teams understand their users through a mix of qualitative and quantitative methods.
            </p>
            <p>
              My background is in [field/degree], which shaped how I think about framing research
              questions and communicating findings to stakeholders who don&apos;t always speak &ldquo;research.&rdquo;
            </p>
            <p>
              Before [current/recent role], I worked at [previous company], where I led research for
              [product area]. I&apos;ve run everything from large-scale diary studies and longitudinal
              surveys to rapid guerrilla testing with paper prototypes.
            </p>
            <p>
              Outside of work, I&apos;m usually [personal interest], [personal interest], or [personal interest].
            </p>
          </div>

          <div className="mt-14 pt-10 border-t border-stone-200">
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-6">Methods I use</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Contextual inquiry',
                'Semi-structured interviews',
                'Usability testing',
                'Diary studies',
                'Surveys',
                'Card sorting',
                'Tree testing',
                'Journey mapping',
                'Concept testing',
                'Stakeholder workshops',
              ].map((m) => (
                <span key={m} className="text-sm text-stone-500 border border-stone-200 px-3 py-1">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-700 border border-stone-300 px-5 py-3 hover:bg-stone-100 transition-colors"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
