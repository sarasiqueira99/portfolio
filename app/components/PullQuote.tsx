export default function PullQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote
      className="rounded-xl px-8 py-7 my-2"
      style={{ backgroundColor: '#e6eeea' }}
    >
      <p
        className="text-xl leading-relaxed text-stone-700 mb-3"
        style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <p className="text-xs uppercase tracking-widest" style={{ color: '#2d5a42' }}>{attribution}</p>
      )}
    </blockquote>
  )
}
