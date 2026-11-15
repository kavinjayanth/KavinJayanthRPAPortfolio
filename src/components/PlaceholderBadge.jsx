/** Small tag shown on sample entries so placeholder content is never mistaken for fact. */
export default function PlaceholderBadge({ children = 'Sample' }) {
  return (
    <span className="inline-flex items-center rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
      {children}
    </span>
  );
}
