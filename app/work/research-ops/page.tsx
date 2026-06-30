import Link from 'next/link'
import Nav from '../../components/Nav'

export default function ResearchOps() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-8 py-16 flex-1">

        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Work
        </Link>

        {/* Header */}
        <div className="mt-12 mb-16 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Research Operations', 'Process Design', 'Stakeholder Management'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 bg-stone-200/60 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl sm:text-5xl text-stone-900 leading-tight mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
          >
            Building a Research Ops Practice from Scratch
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            How I established a research repository, standardized recruiting, and enabled 3x more studies per quarter without adding headcount.
          </p>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 p-8 bg-stone-100/70 border border-stone-200/60">
          {[
            { label: 'Timeline', value: '[X months], [Year]' },
            { label: 'Role', value: 'Lead UX Researcher' },
            { label: 'Team', value: '[Who you worked with]' },
            { label: 'Methods', value: 'Stakeholder interviews, process audit' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1.5">{label}</p>
              <p className="text-stone-700 text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="max-w-2xl space-y-16">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">The Problem</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the situation you inherited : scattered insights, no consistent process, research being duplicated, etc. What was the cost to the team or business?]
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
              [Walk through how you diagnosed the problem, who you talked to, what you audited. What frameworks or mental models guided your thinking?]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">What I Built</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the systems, templates, repositories, or processes you created. Be specific : naming tools (Dovetail, Notion, AirTable, etc.) and the decisions behind them adds credibility.]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Impact</h2>
            <p className="text-stone-600 leading-relaxed">
              [Quantify where possible : time saved, studies per quarter, adoption rate, stakeholder satisfaction. Include a qualitative quote if you have one.]
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Reflection</h2>
            <p className="text-stone-600 leading-relaxed">
              [What would you do differently? What did you learn about the broader research function?]
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
