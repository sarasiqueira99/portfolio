export default function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-xl p-6 text-center shadow-sm">
      <p
        className="text-3xl text-stone-900 mb-1"
        style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 400 }}
      >
        {value}
      </p>
      <p className="text-xs text-stone-400 uppercase tracking-widest leading-snug">{label}</p>
    </div>
  )
}
