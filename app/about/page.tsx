import Nav from '../components/Nav'

const methods = [
  'Contextual inquiry',
  'Semi-structured interviews',
  'Usability testing',
  'Diary studies',
  'Surveys',
  'Card sorting',
  'Concept testing',
  'Stakeholder workshops',
  'Literature review',
  'MaxDiff',
  'Critical User Journeys',
  'Focus groups',
]

export default function About() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-8 pt-20 pb-16 border-b border-stone-200/60">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2d5a42' }}>About</p>
          <h1
            className="text-4xl sm:text-5xl text-stone-900 leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
          >
            Sara Siqueira
          </h1>
        </section>

        {/* Two-column bio */}
        <section className="max-w-5xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Photo */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-stone-200 rounded-xl w-full flex items-center justify-center text-stone-400 text-xs tracking-wide">
                Photo
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2 space-y-5 text-stone-600 leading-relaxed">
              <p>
                UX Researcher with 4 years of experience studying how users interact with emerging AI technology and shaping novel product experiences.
              </p>
              <p>
                I currently lead the UX Research practice at Niantic Spatial, where I advocate for keeping the customer and end user at the core of product and company decisions. I enjoy working in fast-paced environments and partnering closely with cross functional partners to tailor studies to specific goals. I look for creative ways to research emerging technology, always aiming to balance velocity and rigor. I use frameworks like Critical User Journeys to bring structure to ambiguous problem spaces, whether that&apos;s defining core requirements for a new product category or evaluating what is &ldquo;good enough&rdquo; for an established product area.
              </p>
              <p>
                I have always been interested in listening to people and telling their stories, before through journalism and now through building product strategies that are centered on a deep understanding of the user.
              </p>

              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#2d5a42' }}>Get in touch</p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="mailto:sarazsiqueira@gmail.com"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    sarazsiqueira@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarasiqueira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section style={{ backgroundColor: '#e6eeea' }} className="py-16">
          <div className="max-w-5xl mx-auto px-8">
            <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#2d5a42' }}>
              Methods
            </p>
            <div className="flex flex-wrap gap-2.5">
              {methods.map((m) => (
                <span
                  key={m}
                  className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{ backgroundColor: '#d0e4d8', color: '#2d4a3c' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience strip */}
        <section style={{ backgroundColor: '#2d4a3c' }} className="py-14">
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

              {/* Experience column */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#a8c9b5' }}>
                  Experience
                </p>
                <div className="space-y-8">
                  {[
                    { company: 'Niantic Spatial', role: 'UX Researcher', detail: 'Physical AI, B2B' },
                    { company: 'Niantic Labs', role: 'UX Researcher', detail: 'Augmented Reality and Geospatial Technology, B2C' },
                  ].map(({ company, role, detail }) => (
                    <div key={company} className="border-l-2 pl-5" style={{ borderColor: '#2d5a42' }}>
                      <p className="text-white font-medium mb-0.5">{company}</p>
                      <p className="text-sm mb-0.5" style={{ color: '#a8c9b5' }}>{role}</p>
                      <p className="text-xs text-stone-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education column */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-8" style={{ color: '#a8c9b5' }}>
                  Education
                </p>
                <div className="border-l-2 pl-5" style={{ borderColor: '#2d5a42' }}>
                  <p className="text-white font-medium mb-0.5">Tufts University</p>
                  <p className="text-sm" style={{ color: '#a8c9b5' }}>Cognitive &amp; Brain Sciences, Economics</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  )
}
