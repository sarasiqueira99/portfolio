import Link from 'next/link'

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  placeholder: string
  image?: string
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((p) => (
        <Link key={p.slug} href={`/work/${p.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

          {/* Image area */}
          <div className={`w-full aspect-[4/3] ${p.placeholder} overflow-hidden`}>
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            ) : (
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]" />
            )}
          </div>

          {/* Card body */}
          <div className="p-6">
            {/* Method tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: '#d0e4d8', color: '#2d4a3c' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2
              className="text-lg text-stone-800 transition-colors leading-snug mb-2 group-hover:text-[#2d4a3c]"
              style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
            >
              {p.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-stone-500 leading-relaxed mb-5">{p.description}</p>

            {/* CTA */}
            <span className="text-xs font-medium tracking-wide group-hover:underline" style={{ color: '#2d4a3c' }}>
              Read case study →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
