import Link from 'next/link'
import Nav from './components/Nav'
import WorkGrid, { Project } from './components/WorkGrid'
import HeroCanvas from './components/HeroCanvas'

const projects: Project[] = [
  {
    slug: 'niantic-spatial',
    title: 'From Early Research to Product Vision: Defining Strategy for a Geospatial AI Product',
    description: 'Generative research that turned early-stage geospatial AI into a validated product vision and go-to-market plan.',
    tags: ['Generative Research', 'Geospatial AI', 'Product Strategy'],
    placeholder: 'bg-stone-400',
    image: '/ai-casestudy.png',
  },
  {
    slug: 'user-centric-kpis',
    title: 'Establishing User-Centric KPIs for AR Experiences',
    description: 'Mixed-methods field study defining company-wide quality benchmarks at Niantic Labs.',
    tags: ['Mixed Methods', 'Field Study', 'AR / Spatial Computing'],
    placeholder: 'bg-stone-300',
    image: '/ar-casestudy.png',
  },
  {
    slug: 'chi-paper',
    title: 'Crowdsourcing Motivations in Location-Based Media',
    description: 'Literature review and CHI paper on what drives users to contribute to platforms like Pokémon GO.',
    tags: ['Literature Review', 'Crowdsourcing', 'CHI'],
    placeholder: 'bg-stone-200',
    image: '/chi-casestudy.png',
  },
]


export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden px-8 pt-20 pb-20" style={{ minHeight: '92vh' }}>
          <HeroCanvas />
          <div className="relative z-10 max-w-5xl mx-auto">
          <h1
            className="leading-snug mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400, color: '#2d4a3c', fontSize: '2rem' }}
          >
            Hi, I&apos;m Sara.
          </h1>
          <p
            className="leading-[1.2] mb-8 max-w-3xl text-stone-700"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400, fontSize: '2.34rem' }}
          >
            Product researcher driven by understanding how people interact with emerging AI and shaping novel products that change how we engage with the world.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/work"
              className="px-6 py-3 text-sm text-white rounded-full transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#2d4a3c' }}
            >
              View my work
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-sm text-stone-600 border border-stone-300 rounded-full hover:border-stone-500 transition-colors"
            >
              About me
            </Link>
          </div>
          </div>
        </section>

        {/* Work */}
        <section className="max-w-5xl mx-auto px-8 pt-20 pb-28">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-2xl text-stone-800"
              style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
            >
              Work
            </h2>
          </div>
          <WorkGrid projects={projects} />
        </section>

      </main>

      <footer className="border-t border-stone-200/60" style={{ backgroundColor: '#2d4a3c' }}>
        <div className="max-w-5xl mx-auto px-8 py-8 flex items-center justify-between text-xs" style={{ color: '#a8c9b5' }}>
          <span>Sara Siqueira</span>
        </div>
      </footer>
    </>
  )
}
