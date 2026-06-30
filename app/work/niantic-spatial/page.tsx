import Link from 'next/link'
import Nav from '../../components/Nav'

const approachSteps = [
  {
    label: 'Metaanalysis',
    body: 'Analysis of past customer conversations to understand problem statements and existing workflows.',
  },
  {
    label: 'Prototype',
    body: 'From this analysis, defined hypotheses and collaborated with engineering and research teams to build a prototype to gather concrete feedback on a tangible stimulus.',
  },
  {
    label: 'Rapid Feedback',
    body: 'Led a demo of this prototype at an Enterprise AR conference, gathering feedback and sentiment from 50+ users through 5-10 minute conversations. Generated a list of prioritized high-value use cases and common problem statements among a larger sample.',
  },
  {
    label: 'In-Depth Feedback',
    body: 'Conducted 15 customer interviews to dig deeper into the "why" behind prominent use cases that emerged through rapid feedback sessions. Understood the details of existing workflows, customers\' prioritization of must-haves vs. nice-to-haves, and perceived value of the solution presented.',
  },
]

const capabilities = [
  {
    title: 'Existing Data',
    body: 'Leverage the data customers already have to minimize onboarding friction and maximize value of existing data collection methods.',
  },
  {
    title: 'Multimodal',
    body: 'Align different data types to create a single source of truth.',
  },
  {
    title: 'Freshness and Understanding Change Over Time',
    body: 'The system should help customers understand when their physical sites have changed, requiring additional data collection, as well as track changes over time to understand progress.',
  },
]

const impacts = [
  {
    label: '01',
    body: 'Created product definition for an early AI research effort',
  },
  {
    label: '02',
    body: 'Unblocked AI research, GTM, and Design teams',
  },
]

export default function NianticSpatial() {
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
              {['Generative Research', 'Geospatial AI', 'Product Strategy', 'Enterprise'].map((tag) => (
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
              From Early Research to Product Vision: Defining Strategy for a Geospatial AI Product
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              A generative research effort that took early-stage geospatial AI research with no defined product and turned it into a validated product vision, core capability pillars, and a prioritized go-to-market plan, using a hands-on prototype to make abstract research tangible to users for the first time.
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-8 mb-10">
          <div className="w-full aspect-[21/9] bg-stone-300 rounded-xl" />
        </div>

        {/* Meta strip */}
        <div style={{ backgroundColor: '#2d4a3c' }} className="py-10">
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: 'Company', value: 'Niantic Spatial' },
              { label: 'Role', value: 'Lead UX Researcher' },
              { label: 'Partners', value: 'Research, Engineering, Product, Design, GTM' },
              { label: 'Sessions', value: '50+ rapid + 15 in-depth' },
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
                The AI research team was working on new geospatial AI research that lacked product definition. Leadership needed to know two things: which direction to take the underlying research next, and how to turn it into something valuable enough for customers to pay for. Because the work was this early, there was no existing user base, no production prototype, and no shared point of reference for what this product even is.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Research Questions</h2>
              <ul className="space-y-3 text-stone-600">
                {[
                  'What problems are our target customers already trying to solve? What processes, related to managing and understanding physical spaces, are currently the most time-consuming or costly?',
                  'What use cases should we prioritize building for in the early stages of an AI product?',
                  'What should the core pillars of the product be in order to meet customer needs?',
                ].map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                    <span className="leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Approach — vertical timeline */}
            <section>
              <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: '#2d5a42' }}>Approach</h2>
              <div className="space-y-0">
                {approachSteps.map(({ label, body }, i) => {
                  const isLast = i === approachSteps.length - 1
                  return (
                    <div key={label} className="flex gap-6">
                      {/* Dot + line column */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className="w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0"
                          style={{ backgroundColor: '#2d4a3c' }}
                        />
                        {!isLast && (
                          <div className="w-px flex-1 mt-1 mb-0" style={{ backgroundColor: '#a8c9b5', minHeight: '2.5rem' }} />
                        )}
                      </div>
                      {/* Content */}
                      <div className={isLast ? 'pb-0' : 'pb-8'}>
                        <p className="text-sm font-medium mb-1.5 text-stone-900">{label}</p>
                        <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Product Vision */}
            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Product Vision</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                From the insights gathered, I analyzed common trends across industries and customer segments and created a product design vision outlining a series of repeatable, core capabilities that would address unmet needs and impact customers&apos; bottom line.
              </p>
              <div className="space-y-4">
                {capabilities.map(({ title, body }, i) => (
                  <div
                    key={title}
                    className="rounded-xl p-6 flex gap-5"
                    style={{ backgroundColor: '#e6eeea' }}
                  >
                    <p
                      className="text-2xl flex-shrink-0 leading-none mt-0.5"
                      style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#2d4a3c', fontWeight: 400 }}
                    >
                      0{i + 1}
                    </p>
                    <div>
                      <p className="text-sm font-medium mb-1.5" style={{ color: '#2d4a3c' }}>{title}</p>
                      <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: '#2d5a42' }}>Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {impacts.map(({ label, body }) => (
                  <div key={label} className="bg-white border border-stone-200/80 rounded-xl p-6 shadow-sm">
                    <p
                      className="text-2xl mb-4"
                      style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#2d4a3c', fontWeight: 400 }}
                    >
                      {label}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 leading-relaxed">
                This work took nascent research into a product design vision with a set of core features that will become the foundation of the company&apos;s AI services. I bridged the gap between emerging research and customer requirements in real, physical environments. This provided the team with definition and a pathway to act on that is centered on customer needs. This unblocked several teams: the research team was able to prioritize research efforts that align with the product vision, GTM teams had tangible feature sets and use cases to speak to in sales conversations, and the design team could iterate on the prototype so that it reflects our most up to date understanding of our customers and end users.
              </p>
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
