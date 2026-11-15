import { Award, ExternalLink } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import PlaceholderBadge from './PlaceholderBadge';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 / Certifications"
      title="Certifications & qualifications"
      description="Technical credentials that back up the skills above."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={`${c.name}-${i}`} delay={i * 0.06}>
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent-400">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                {c.placeholder && <PlaceholderBadge>Placeholder</PlaceholderBadge>}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-1 text-sm">{c.issuer}</p>
              <p className="mt-3 font-mono text-xs text-zinc-500">
                {c.year}
                {c.credentialId && ` · ID ${c.credentialId}`}
              </p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 hover:text-white"
                >
                  Verify credential
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
