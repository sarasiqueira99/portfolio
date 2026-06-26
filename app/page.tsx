import Link from 'next/link'
import Nav from './components/Nav'

const projects = [
  {
    slug: 'research-ops',
    title: 'Building a Research Ops Practice from Scratch',
    tags: ['Research Operations', 'Process Design', 'Stakeholder Management'],
    summary:
      'How I established a research repository, standardized recruiting, and enabled 3x more studies per quarter without adding headcount.',
  },
  {
    slug: 'onboarding',
    title: 'Redesigning New User Onboarding',
    tags: ['Usability Testing', 'Journey Mapping', 'Cross-functional'],
    summary:
      'A mixed-methods study that uncovered critical drop-off points and drove a 40% improvement in 7-day activation.',
  },
  {
    slug: 'discovery',
    title: 'Discovery Research: Emerging Market Expansion',
    tags: ['Generative Research', 'Contextual Inquiry', 'Strategy'],
    summary:
      'Six weeks of field research across three cities that shaped a new product line and informed the 2024 roadmap.',
  },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-20 flex-1">
        <section className="mb-24">
          <h1 className="text-4xl font-light text-stone-800 leading-snug mb-6 max-w-2xl">
            I help product teams make decisions grounded in what people actually need.
          </h1>
          <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
            I&apos;m Sara Siqueira, a UX researcher with experience in enterprise software, consumer apps,
            and early-stage startups. I specialize in generative and evaluative research — from
            contextual inquiry to large-scale surveys.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-8">Selected Work</h2>
          <div className="space-y-px">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block border border-stone-200 bg-white p-8 hover:border-stone-400 transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-normal text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.summary}</p>
                <span className="inline-block mt-5 text-xs text-stone-400 group-hover:text-stone-700 transition-colors tracking-wide">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between text-xs text-stone-400">
          <span>Sara Siqueira</span>
          <a href="mailto:hello@sarasiqueira.com" className="hover:text-stone-700 transition-colors">
            hello@sarasiqueira.com
          </a>
        </div>
      </footer>
    </>
  )
}
