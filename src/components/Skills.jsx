import { motion } from 'framer-motion';
import Section from './Section';
import Reveal from './Reveal';
import { skillCategories } from '../data/skills';

function SkillChip({ skill }) {
  const Icon = skill.icon;
  return (
    <li>
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 transition hover:border-accent/40 hover:bg-accent/5">
        <Icon className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
        <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
      </div>
      {typeof skill.level === 'number' && (
        <div
          className="mx-1 mt-1.5 h-1 overflow-hidden rounded-full bg-white/10"
          role="img"
          aria-label={`${skill.name} proficiency ${skill.level}%`}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-300"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      )}
    </li>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="Tools and technologies I work with"
      description="Grouped by how I use them, from RPA platforms and programming to Power Platform, web, cloud and AI."
      className="bg-ink-900/60"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Reveal
              key={cat.title}
              delay={i * 0.05}
              className={cat.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <article
                className={`card card-hover h-full p-6 ${
                  cat.featured ? 'border-accent/30 bg-gradient-to-b from-accent/[0.07] to-ink-850/80' : ''
                }`}
              >
                <header className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                  </div>
                  {cat.blurb && (
                    <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-300">
                      {cat.blurb}
                    </span>
                  )}
                </header>
                <ul className="mt-5 grid gap-2.5">
                  {cat.skills.map((s) => (
                    <SkillChip key={s.name} skill={s} />
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
