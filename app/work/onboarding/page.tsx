import Link from 'next/link'
import Nav from '../../components/Nav'

export default function Onboarding() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-8 py-16 flex-1">

        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Work
        </Link>

        <div className="mt-12 mb-16 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Usability Testing', 'Journey Mapping', 'Cross-functional'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 bg-stone-200/60 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl sm:text-5xl text-stone-900 leading-tight mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
          >
            Redesigning New User Onboarding
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            A mixed-methods study that uncovered critical drop-off points and drove a 40% improvement in 7-day activation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 p-8 bg-stone-100/70 border border-stone-200/60">
          {[
            { label: 'Timeline', value: '[X months], [Year]' },
            { label: 'Role', value: 'UX Researcher' },
            { label: 'Team', value: '[Who you worked with]' },
            { label: 'Methods', value: 'Usability testing, surveys, analytics' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1.5">{label}</p>
              <p className="text-stone-700 text-sm">{value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl space-y-16">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">The Problem</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe what the team observed : where users were dropping off, what the data showed, what prompted the research. What was the business impact?]
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
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Method & Participants</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe why you chose these methods, how you recruited, sample size and criteria. What tradeoffs did you make given time or resource constraints?]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Key Findings</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              [Frame the findings narratively. What was the core insight?]
            </p>
            <ul className="space-y-3 text-stone-600">
              {['[Finding 1 : specific and grounded in data]', '[Finding 2]', '[Finding 3]'].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-stone-300 mt-0.5">·</span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Impact</h2>
            <p className="text-stone-600 leading-relaxed">
              [What did you recommend? What was accepted and shipped? What was the measured outcome?]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Reflection</h2>
            <p className="text-stone-600 leading-relaxed">
              [What would you do differently? What did you learn about mixed-methods research or working with this type of team?]
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
