import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import PlaceholderBadge from './PlaceholderBadge';

function Block({ label, children }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-wider text-accent-400">{label}</h4>
      <p className="mt-2 text-sm leading-relaxed sm:text-base">{children}</p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const Icon = project.icon;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const dialog = dialogRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialog) return;
      // Keep keyboard focus inside the dialog
      const focusable = dialog.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-ink-850 p-6 shadow-glow-lg outline-none sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 pr-10">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent-400">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent-400">{project.area}</p>
            <h3 id="project-modal-title" className="font-display text-xl font-semibold text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>
        </div>


        <p className="mt-6 text-base leading-relaxed text-zinc-300">{project.summary}</p>

        <div className="mt-6 space-y-5 border-t border-white/10 pt-6">
          <Block label="The problem">{project.problem}</Block>
          <Block label="The solution">{project.solution}</Block>
          {project.outcome && <Block label="The outcome">{project.outcome}</Block>}
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-accent-400">Tools used</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {(project.repo || project.demo) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <GithubIcon className="h-4 w-4" />
                Source code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
