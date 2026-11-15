import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Building2 } from 'lucide-react';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { GithubIcon, LinkedinIcon } from './Icons';

// Every figure below is derived from your own profile data, nothing invented.
const stats = [
  { value: profile.experience, label: 'Experience' },
  { value: String(skillCategories[0].skills.length), label: 'RPA platforms' },
  { value: String(projects.length), label: 'Automation areas' },
];

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pt-16">
      {/* background */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent-300"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I’m {profile.name}.
            <span className="mt-2 block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-accent-400" aria-hidden="true" />
              {profile.company}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-400" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <LinkedinIcon />
              </a>
            </span>
          </motion.div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs text-zinc-500" aria-hidden="true">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-accent/10 opacity-70 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-2 shadow-glow-lg">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="480"
              height="600"
              fetchpriority="high"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Currently</p>
            <p className="text-sm font-medium text-white">RPA Developer @ {profile.company}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
