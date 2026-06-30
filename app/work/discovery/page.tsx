import Link from 'next/link'
import Nav from '../../components/Nav'

export default function Discovery() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-8 py-16 flex-1">

        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Work
        </Link>

        <div className="mt-12 mb-16 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Generative Research', 'Contextual Inquiry', 'Strategy'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 bg-stone-200/60 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl sm:text-5xl text-stone-900 leading-tight mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
          >
            Discovery Research: Emerging Market Expansion
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Six weeks of field research across three cities that shaped a new product line and informed the 2024 roadmap.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 p-8 bg-stone-100/70 border border-stone-200/60">
          {[
            { label: 'Timeline', value: '6 weeks, [Year]' },
            { label: 'Role', value: 'Lead Researcher' },
            { label: 'Team', value: '[Who you worked with]' },
            { label: 'Methods', value: 'Contextual inquiry, interviews, observation' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1.5">{label}</p>
              <p className="text-stone-700 text-sm">{value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl space-y-16">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Context & Brief</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the business context : what market, what opportunity, what question leadership was trying to answer. Why was field research the right call?]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Research Questions</h2>
            <ul className="space-y-3 text-stone-600">
              {['[Research question 1]', '[Research question 2]', '[Research question 3]'].map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="text-stone-300 mt-0.5">·</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Approach</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe how you planned the research : recruiting in unfamiliar markets, working with local partners, adapting your interview guide for cultural context, ethical considerations.]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">What We Observed</h2>
            <p className="text-stone-600 leading-relaxed">
              [The richest part : tell a story. What surprised you in the field? What assumptions were broken? Use specific anecdotes, not just summaries.]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Key Findings</h2>
            <ul className="space-y-3 text-stone-600">
              {['[Theme 1]', '[Theme 2]', '[Theme 3]'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-stone-300 mt-0.5">·</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Strategic Impact</h2>
            <p className="text-stone-600 leading-relaxed">
              [What decisions did this research drive? What got built, changed, or deprioritized? Who did you influence and how did you communicate findings to leadership?]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Reflection</h2>
            <p className="text-stone-600 leading-relaxed">
              [What would you do differently? What did you learn about doing research in new markets or at a strategic level?]
            </p>
          </section>

        </div>

        <div className="mt-20 pt-10 border-t border-stone-200/60">
          <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
            ← Back to all work
          </Link>
        </div>

      </main>
    </>
  )
}
