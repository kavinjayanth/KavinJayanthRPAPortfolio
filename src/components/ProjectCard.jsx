import { ArrowUpRight } from 'lucide-react';
import PlaceholderBadge from './PlaceholderBadge';

export default function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      {/* visual header (swap for a real screenshot via project.image if you like) */}
      <div className="relative grid h-36 place-items-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/25 blur-3xl transition group-hover:bg-accent/40"
          aria-hidden="true"
        />
        <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-accent/40 bg-ink-900/80 text-accent-400 shadow-glow">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        {project.placeholder && (
          <span className="absolute right-3 top-3">
            <PlaceholderBadge />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent-400">{project.area}</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools used">
          {project.tools.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent-300 transition hover:text-white"
          aria-haspopup="dialog"
        >
          View details
          <span className="sr-only"> for {project.title}</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
