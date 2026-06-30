import Link from 'next/link'
import Nav from '../../components/Nav'
import StatTile from '../../components/StatTile'
import PullQuote from '../../components/PullQuote'

export default function ChiPaper() {
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
              {['Literature Review', 'Location-Based Media', 'Crowdsourcing', 'CHI'].map((tag) => (
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
              Crowdsourcing Motivations in Location-Based Media
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              A literature review and CHI paper written in collaboration with university researchers to understand what motivates users to contribute to location-based platforms like Pokémon GO and Google Maps.
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-8 mb-0">
          <img src="/chi-casestudy.png" alt="CHI Paper" className="w-full aspect-[21/9] object-cover rounded-xl" />
        </div>

        {/* Meta strip */}
        <div style={{ backgroundColor: '#2d4a3c' }} className="py-10">
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: 'Company', value: 'Niantic Labs' },
              { label: 'Role', value: 'UX Researcher' },
              { label: 'Collaborators', value: 'University research partners' },
              { label: 'Corpus', value: '19 papers reviewed' },
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
                Location-based media platforms like Google Maps, Waze, Pokémon GO, and Ingress Prime rely on user-generated content to function. But what actually motivates people to contribute? At Niantic, I partnered with professors at several universities to answer this question rigorously, producing a literature review that would inform how we design for contribution behavior.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Research Questions</h2>
              <ul className="space-y-3 text-stone-600">
                {[
                  'What theoretical frameworks have been used to explain and design approaches for motivating crowdsourcing in location-based media?',
                  'What kinds of UGC and crowdsourcing processes in location-based media motivate people to contribute?',
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
              <p className="text-stone-600 leading-relaxed">
                To find articles at the intersection of maps, user-generated content, and motivation, we systematically reviewed the literature and selected 19 papers: 13 empirical studies, 5 theoretical studies, and 1 literature review-based survey. We analyzed these papers for recurring theoretical frameworks and practical design implications.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Key Findings</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Two theoretical frameworks emerged as dominant across the literature.
              </p>

              <div className="space-y-6">
                <div className="rounded-xl p-6" style={{ backgroundColor: '#e6eeea' }}>
                  <h3 className="text-sm font-medium mb-3" style={{ color: '#2d4a3c' }}>
                    Self-Determination Theory
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    This framework distinguishes extrinsic motivation (contributing to earn a reward) from intrinsic motivation (contributing because it is enjoyable or meaningful). Intrinsic motivation breaks into three components:
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {[
                      'Autonomy: allowing users flexibility to contribute in ways that align with their personal interests',
                      'Competence: helping users feel capable, track their progress, and showcase expertise',
                      'Relatedness: fostering a sense of belonging and social connection through shared contribution',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-6" style={{ backgroundColor: '#e6eeea' }}>
                  <h3 className="text-sm font-medium mb-3" style={{ color: '#2d4a3c' }}>
                    Maslow&apos;s Hierarchy of Needs
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    This needs-based lens surfaces how application design can satisfy fundamental human drives:
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {[
                      'Safety needs: users contribute information that protects or benefits others',
                      'Belonging needs: community-driven motivations, friending, sub-communities',
                      'Esteem needs: improving reputation within a community through visible contribution',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <PullQuote
              quote="Intrinsic motivation, especially autonomy and competence, is associated with higher-quality, sustained contributions than extrinsic reward alone."
              attribution="Key insight from literature review"
            />

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: '#2d5a42' }}>Design Considerations</h2>
              <ul className="space-y-4 text-stone-600">
                {[
                  { title: 'Balance cooperation and competition', body: 'A joint mission with an in-group, combined with competition against another team, produces more contributions than pure cooperation or individual competition alone.' },
                  { title: 'Gamification can increase engagement', body: 'Leaderboards tap into achievement-based motivators; points show progress; avatars address self-expression needs and can deepen intrinsic investment in the platform.' },
                  { title: 'Social feedback loops drive sustained contribution', body: 'Likes, comments, and signals that others benefited from a contribution create recognition that satisfies esteem needs and reinforces contribution behavior.' },
                  { title: 'Intrinsic motivation drives quality', body: 'Extrinsic rewards may drive volume, but intrinsic motivation, especially autonomy and competence, is associated with higher-quality, sustained contributions.' },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-0.5 font-medium" style={{ color: '#2d5a42' }}>·</span>
                    <span><span className="font-medium text-stone-700">{title}.</span> {body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: '#2d5a42' }}>Impact</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <StatTile value="19" label="Papers reviewed" />
                <StatTile value="2" label="Frameworks identified" />
                <StatTile value="CHI" label="Published at" />
              </div>
              <p className="text-stone-600 leading-relaxed">
                The research was written up as a paper and presented at CHI, the premier academic conference in human-computer interaction. The findings informed how Niantic thinks about designing contribution mechanics across its location-based products.
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
