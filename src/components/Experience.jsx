import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import PlaceholderBadge from './PlaceholderBadge';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Experience"
      title="Professional experience"
      description="Where I have applied my automation skills."
    >
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              className="absolute -left-[13px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-ink-950"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(47,123,255,0.8)]" />
            </span>

            <Reveal>
              <article className="card card-hover p-6 sm:p-7">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-accent-300">
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      {job.company}
                    </p>
                  </div>
                  {job.placeholder && <PlaceholderBadge>Edit details</PlaceholderBadge>}
                </header>

                <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </p>

                <p className="mt-4 leading-relaxed">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
