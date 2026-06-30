import Nav from '../components/Nav'
import WorkGrid, { Project } from '../components/WorkGrid'

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

export default function Work() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-8 py-20 flex-1">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-14">Work</p>
        <WorkGrid projects={projects} />
      </main>
    </>
  )
}
