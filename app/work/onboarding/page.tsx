import Link from 'next/link'
import Nav from '../../components/Nav'

export default function Onboarding() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
          ← Back to Work
        </Link>

        <div className="mt-10 mb-14">
          <div className="flex flex-wrap gap-2 mb-5">
            {['Usability Testing', 'Journey Mapping', 'Cross-functional'].map((tag) => (
              <span key={tag} className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-light text-stone-800 leading-snug mb-4">
            Redesigning New User Onboarding
          </h1>
          <p className="text-stone-500 leading-relaxed">
            A mixed-methods study that uncovered critical drop-off points and drove a 40% improvement in 7-day activation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16 p-6 bg-stone-100 text-sm">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Timeline</p>
            <p className="text-stone-700">[X months], [Year]</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Role</p>
            <p className="text-stone-700">UX Researcher</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-1">Methods</p>
            <p className="text-stone-700">Usability testing, surveys, analytics review</p>
          </div>
        </div>

        <div className="prose prose-stone max-w-none space-y-10">
          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">The problem</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe what the team observed — where users were dropping off, what the data showed, what prompted the research. What was the business impact of the problem?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Research questions</h2>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>[Research question 1]</li>
              <li>[Research question 2]</li>
              <li>[Research question 3]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Method & participants</h2>
            <p className="text-stone-600 leading-relaxed">
              [Describe why you chose these methods, how you recruited, sample size and criteria. What tradeoffs did you make given time or resource constraints?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Key findings</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              [Frame the findings narratively before listing. What was the core insight?]
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>[Finding 1 — specific and grounded in data]</li>
              <li>[Finding 2]</li>
              <li>[Finding 3]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Recommendations & outcome</h2>
            <p className="text-stone-600 leading-relaxed">
              [What did you recommend? What was accepted and shipped? What was the measured outcome?]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-stone-800 mb-4">Reflection</h2>
            <p className="text-stone-600 leading-relaxed">
              [What would you do differently? What did you learn about mixed-methods research, collaboration, or working with this type of team?]
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
