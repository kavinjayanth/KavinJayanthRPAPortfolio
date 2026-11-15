import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import PlaceholderBadge from './PlaceholderBadge';
import { education } from '../data/education';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="06 / Education"
      title="Academic background"
      className="bg-ink-900/60"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={`${e.degree}-${i}`} delay={i * 0.06}>
            <article className="card card-hover flex gap-5 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-400">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">{e.degree}</h3>
                  {e.placeholder && <PlaceholderBadge>Placeholder</PlaceholderBadge>}
                </div>
                <p className="mt-1 text-accent-300">{e.institution}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {e.location}
                  </span>
                </p>
                {e.notes && <p className="mt-3 text-sm leading-relaxed">{e.notes}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
