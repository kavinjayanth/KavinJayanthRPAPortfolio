import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Send } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

// Set VITE_FORMSPREE_ID in .env (see README). Without it the form opens the visitor's email app.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const fieldClass =
  'mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30';

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, external: true },
  { icon: GithubIcon, label: 'GitHub', value: 'View my code', href: profile.github, external: true },
];

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // honeypot: bots fill this, humans never see it

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    };

    if (!FORM_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({
        state: 'fallback',
        message: 'Your email app should open with the message ready to send.',
      });
      return;
    }

    setStatus({ state: 'sending', message: '' });
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
    } catch {
      setStatus({
        state: 'error',
        message: `Something went wrong. Please try again or email ${profile.email} directly.`,
      });
    }
  }

  const sending = status.state === 'sending';

  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Let’s work together"
      description="Hiring for an automation role or have a process worth automating? Send a message and I will get back to you."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          {links.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="card card-hover flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-400">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500">{label}</span>
                <span className="block truncate text-sm font-medium text-zinc-100">{value}</span>
              </span>
            </a>
          ))}
          <p className="flex items-center gap-2 px-1 text-sm">
            <MapPin className="h-4 w-4 text-accent-400" aria-hidden="true" />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate={false}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                Message
              </label>
              <textarea id="message" name="message" required rows={6} placeholder="Tell me about the role or project…" className={`${fieldClass} resize-y`} />
            </div>

            {/* Honeypot spam trap, hidden from people and assistive tech */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="_gotcha">Leave this field empty</label>
              <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={sending} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                {sending ? 'Sending…' : 'Send message'}
              </button>
              <p role="status" aria-live="polite" className="flex items-center gap-2 text-sm">
                {status.state === 'success' && <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />}
                {status.state === 'error' && <AlertCircle className="h-4 w-4 text-red-400" aria-hidden="true" />}
                <span className={status.state === 'error' ? 'text-red-300' : status.state === 'success' ? 'text-emerald-300' : ''}>
                  {status.message}
                </span>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
