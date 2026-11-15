import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm transition-colors ${
      active === id ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-base font-semibold text-white"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-xs text-accent-400">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={linkClass(l.id)}
                aria-current={active === l.id ? 'true' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="btn-primary hidden !px-4 !py-2 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-200 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-5 pt-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base ${
                      active === l.id ? 'bg-white/5 text-white' : 'text-zinc-400'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={profile.resumeUrl} download className="btn-primary w-full">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { ids as navIds };
