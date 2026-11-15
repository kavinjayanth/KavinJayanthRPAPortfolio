import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
        </p>
        <div className="flex items-center gap-1">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
            <LinkedinIcon />
          </a>
          <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
