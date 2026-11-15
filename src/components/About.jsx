import { Briefcase, Building2, MapPin, Sparkles } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { about, profile } from '../data/profile';

const facts = [
  { icon: Briefcase, label: 'Role', value: 'RPA Developer | Automation Developer' },
  { icon: Building2, label: 'Company', value: profile.company },
  { icon: MapPin, label: 'Location', value: profile.location },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="Turning repetitive work into reliable automation"
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 text-base leading-relaxed lg:col-span-3">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 lg:col-span-2">
          <div className="card divide-y divide-white/10">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 px-5 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{label}</p>
                  <p className="text-sm font-medium text-zinc-100">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-5">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              <Sparkles className="h-4 w-4 text-accent-400" aria-hidden="true" />
              Technical interests
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
