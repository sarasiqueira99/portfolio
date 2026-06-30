import Link from 'next/link'
import Nav from '../../components/Nav'
import StatTile from '../../components/StatTile'
import PullQuote from '../../components/PullQuote'

export default function UserCentricKPIs() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-8 pt-16 pb-0">
          <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
            ← Work
          </Link>

          <div className="mt-12 mb-12 max-w-3xl">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {['Mixed Methods', 'Field Study', 'AR / Spatial Computing', 'KPIs'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: '#d0e4d8', color: '#2d4a3c' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-4xl sm:text-5xl text-stone-900 leading-tight mb-6"
              style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
            >
              Establishing User-Centric KPIs for AR Experiences
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              A four-phase mixed-methods field study that defined company-wide benchmarks for measuring the quality of AR products, giving engineering, product, and design a shared standard for &quot;good enough.&quot;
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-8 mb-0">
          <div className="w-full aspect-[21/9] bg-stone-300 rounded-xl" />
        </div>

        {/* Meta strip */}
        <div style={{ backgroundColor: '#2d4a3c' }} className="mt-0 py-10">
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: 'Company', value: 'Niantic Labs' },
              { label: 'Role', value: 'Lead UX Researcher' },
              { label: 'Partners', value: 'Engineering, Product, Design' },
              { label: 'Sessions', value: '30 in-person' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#a8c9b5' }}>{label}</p>
                <p className="text-white text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="max-w-5xl mx-auto px-8 py-16">
          <div className="max-w-2xl space-y-16">

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>The Problem</h2>
              <p className="text-stone-600 leading-relaxed">
                Before this study, teams at Niantic did not have user-centric KPIs to evaluate and benchmark the success of their AR products and experiences. Without a shared standard, teams didn&apos;t know what was <em>good enough</em>, or at what point technical error was degrading the user experience. This left product and engineering decisions without a user-grounded anchor.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Research Questions</h2>
              <ul className="space-y-3 text-stone-600">
                {[
                  'In AR experiences, how much error is too much? At what threshold does it degrade a user\'s sense of immersion?',
                  'What is immersion, and how can it be operationalized and measured in a field study context?',
                ].map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                    <span className="leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Approach</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                I designed and led a four-phase study end to end, from defining the methodology through to presenting guidelines company-wide.
              </p>

              <div className="space-y-6">
                {[
                  {
                    phase: 'Phase 1: Planning',
                    body: 'I collaborated with cross-functional partners to collect all research questions and understand technical constraints. I then examined the academic literature to identify existing methodologies, validated questionnaires, and frameworks around immersion. This grounded the study design in current best practices before a single session was run.',
                  },
                  {
                    phase: 'Phase 2: Prototype Development',
                    body: 'The study required a custom prototype that could simulate specific error conditions, log behavioral data, and run controlled experimental conditions. I worked closely with engineering to define requirements and ensure the prototype was study-ready. This required translating research needs into technical specs across teams.',
                  },
                  {
                    phase: 'Phase 3: Data Collection',
                    body: 'We ran 30 in-person field study sessions: 10 for a pilot study and 20 for the actual study. I used a combination of methods specifically designed to capture the full picture of user experience without relying solely on post-task memory.',
                  },
                  {
                    phase: 'Phase 4: Analysis',
                    body: 'After 30 sessions, I synthesized data across all sources: think-alouds, videos, screen recordings, real-time reports, post-task interviews, and surveys. Analysis focused on quantifying user perceptions, mapping sentiment to technical metrics through correlational analysis, and comparing conditions to derive best practices.',
                  },
                ].map(({ phase, body }) => (
                  <div
                    key={phase}
                    className="rounded-xl p-6"
                    style={{ backgroundColor: '#e6eeea' }}
                  >
                    <h3
                      className="text-sm font-medium mb-2"
                      style={{ color: '#2d4a3c' }}
                    >
                      {phase}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Methods</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                I chose a combination of qualitative, quantitative, observational, and self-report methods to triangulate across data sources. Each method was chosen to address a specific limitation of the others.
              </p>
              <ul className="space-y-4 text-stone-600">
                {[
                  { title: 'Real-time perception tracking', body: 'Participants signaled in the moment when they noticed errors, capturing data that post-task recall consistently missed. Post-task interviews confirmed the value of this: users had significant recency bias until prompted with specific moments.' },
                  { title: 'Think-aloud protocol', body: 'Verbal narration during tasks captured reactions and sentiment in the moment, which was particularly useful for understanding how users assessed error severity and what compensatory behaviors they adopted.' },
                  { title: 'Post-test interviews', body: 'Focused on overall sentiment and high-level mental models not visible during task execution, especially how users described walking away from the experience, which correlates with re-engagement.' },
                  { title: 'Post-task questionnaire', body: 'Validated scales generated quantitative measures that could be correlated with technical metrics, enabling the data-driven benchmarks the study was designed to produce.' },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                    <span><span className="font-medium text-stone-700">{title}.</span> {body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: '#2d5a42' }}>Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'Concrete, data-driven benchmarks that defined acceptable error thresholds for AR experiences',
                  'A prioritized list of error types ranked by their actual impact on user experience, giving engineering a user-grounded triage framework',
                  'Design guidelines and best practices presented to the company as shared standards across product teams',
                ].map((item, i) => (
                  <div key={item} className="bg-white border border-stone-200/80 rounded-xl p-6 shadow-sm">
                    <p className="text-2xl mb-4" style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#2d4a3c', fontWeight: 400 }}>
                      0{i + 1}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 pb-16 pt-4 border-t border-stone-200/60">
          <Link href="/work" className="text-xs text-stone-400 hover:text-stone-700 tracking-wide transition-colors">
            ← Back to all work
          </Link>
        </div>

      </main>
    </>
  )
}
