import Link from 'next/link'
import Nav from '../../components/Nav'

export default function Discovery() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Back to Work
        </Link>

        <div className="mt-10 mb-14">
          <div className="flex flex-wrap gap-2 mb-5">
            {['Generative Research', 'Contextual Inquiry', 'Strategy'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-light text-stone-800 leading-snug mb-4">
            Discovery Research: Emerging Market Expansion
          </h1>
          <p className="text-stone-500 leading-relaxed">
            Six weeks of field research across three cities that shaped a new product line and informed the 2024 roadmap.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16 p-6 bg-stone-100 text-sm">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Timeline</p>
            <p className="text-stone-700">6 weeks, [Year]</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Role</p>
            <p className="text-stone-700">Lead Researcher</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Methods</p>
            <p className="text-stone-700">Contextual inquiry, semi-structured interviews, observation</p>
          </div>
        </div>

        <div className="prose prose-stone max-w-none space-y-10">
          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Context & brief</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the business context — what market, what opportunity, what question leadership was trying to answer. Why was field research the right call?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Planning & logistics</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe how you planned the trip — recruiting in unfamiliar markets, working with local partners, adapting your interview guide for cultural context, ethical considerations.]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">What we observed</h2>
            <p className="text-stone-600 leading-relaxed">
              [The richest part — tell a story. What surprised you in the field? What assumptions were broken? Use specific anecdotes, not just summaries.]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Synthesis & themes</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              [How did you make sense of the data? What synthesis methods did you use — affinity mapping, thematic analysis, etc.?]
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>[Theme 1]</li>
              <li>[Theme 2]</li>
              <li>[Theme 3]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Strategic impact</h2>
            <p className="text-stone-600 leading-relaxed">
              [What decisions did this research drive? What got built, changed, or deprioritized as a result? Who did you influence and how did you communicate findings to leadership?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Reflection</h2>
            <p className="text-stone-600 leading-relaxed">
              [What would you do differently? What did you learn about doing research in new markets or at a strategic level?]
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
