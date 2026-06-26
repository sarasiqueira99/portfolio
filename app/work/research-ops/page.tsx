import Link from 'next/link'
import Nav from '../../components/Nav'

export default function ResearchOps() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Back to Work
        </Link>

        <div className="mt-10 mb-14">
          <div className="flex flex-wrap gap-2 mb-5">
            {['Research Operations', 'Process Design', 'Stakeholder Management'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-light text-stone-800 leading-snug mb-4">
            Building a Research Ops Practice from Scratch
          </h1>
          <p className="text-stone-500 leading-relaxed">
            How I established a research repository, standardized recruiting, and enabled 3x more studies per quarter without adding headcount.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16 p-6 bg-stone-100 text-sm">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Timeline</p>
            <p className="text-stone-700">[X months], [Year]</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Role</p>
            <p className="text-stone-700">Lead UX Researcher</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Methods</p>
            <p className="text-stone-700">Stakeholder interviews, process audit, piloting</p>
          </div>
        </div>

        <div className="prose prose-stone max-w-none space-y-10">
          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">The problem</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the situation you inherited — scattered insights, no consistent process, research being duplicated, etc. What was the cost to the team or business?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">My approach</h2>
            <p className="text-stone-600 leading-relaxed">
              [Walk through how you diagnosed the problem, who you talked to, what you audited. What frameworks or mental models guided your thinking?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">What I built</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe the systems, templates, repositories, or processes you created. Be specific — naming tools (Dovetail, Notion, AirTable, etc.) and the decisions behind them adds credibility.]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Impact</h2>
            <p className="text-stone-600 leading-relaxed">
              [Quantify where possible — time saved, studies per quarter, adoption rate, stakeholder satisfaction. Include a qualitative quote if you have one.]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">What I learned</h2>
            <p className="text-stone-600 leading-relaxed">
              [Reflection on what you&apos;d do differently, what surprised you, or what this project taught you about the broader research function.]
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
