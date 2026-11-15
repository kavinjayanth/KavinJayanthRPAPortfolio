# Kavin Jayanth: RPA Developer Portfolio

A responsive, dark-themed portfolio built with **React 18, Vite, Tailwind CSS, Framer Motion and Lucide icons**.

## Features

- 8 sections: Home, About, Skills, Experience, Projects, Certifications, Education, Contact
- Sticky navigation with active-section highlighting, mobile menu, scroll progress bar, smooth scrolling
- Project cards with an accessible detail modal (problem / solution / outcome / tools / links)
- Resume download button (navbar, hero, mobile menu)
- Contact form via Formspree, with mailto fallback and spam honeypot
- SEO: title, description, Open Graph / Twitter tags, JSON-LD, robots.txt, sitemap.xml
- Accessibility: skip link, semantic landmarks, focus states, keyboard-friendly modal, `prefers-reduced-motion` support
- Performance: code-split vendor/animation chunks, font `display=swap`, immutable asset caching on Vercel

## Project structure

```
kavin-portfolio/
├── index.html              # SEO meta tags, fonts, JSON-LD
├── public/                 # Static files served as-is
│   ├── Kavin_Jayanth_Resume.pdf   # PLACEHOLDER: replace with your resume
│   ├── og-image.png               # Social share image (1200x630)
│   ├── images/profile.svg         # PLACEHOLDER: replace with your photo
│   ├── favicon.svg, robots.txt, sitemap.xml
├── src/
│   ├── data/               # ALL content lives here (edit these files)
│   │   ├── profile.js      # name, contacts, links, about text, nav
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   └── education.js
│   ├── components/         # Hero, About, Skills, Experience, Projects, ProjectCard,
│   │                       # ProjectModal, Certifications, Education, Contact, Footer,
│   │                       # Navbar, Section, Reveal, PlaceholderBadge, Icons
│   ├── hooks/useActiveSection.js
│   ├── App.jsx, main.jsx, index.css
├── tailwind.config.js, vite.config.js, postcss.config.js, vercel.json
└── .env.example
```

## Run locally

Requires Node.js 18+.

```bash
npm install
cp .env.example .env     # then add your Formspree ID (see below)
npm run dev              # http://localhost:5173
npm run build            # production build into /dist
npm run preview          # serve the production build locally
```

## Make it yours (checklist)

Everything marked `[ ... ]` or `PLACEHOLDER` is intentionally unfilled. Nothing about your employment, certifications, projects or results has been invented.

1. `src/data/profile.js`: set your real **email**, **LinkedIn** and **GitHub** URLs.
2. Replace `public/Kavin_Jayanth_Resume.pdf` with your resume (keep the filename, or change `resumeUrl`).
3. Add your photo as `public/images/profile.jpg` and set `photo: '/images/profile.jpg'` in `profile.js`.
4. `src/data/experience.js`: add start date, real responsibilities and verified achievements.
5. `src/data/projects.js`: replace the 6 sample entries with real projects. Delete `placeholder: true` on each finished one (this hides the "Sample" badge). Add `repo` / `demo` URLs to show buttons.
6. `src/data/certifications.js` and `education.js`: replace placeholders with real records.
7. Optional: add `level: 0-100` to any skill in `skills.js` to show a proficiency bar. None are shown by default.
8. After deploying, replace `https://your-domain.vercel.app` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with your real URL, and update the LinkedIn/GitHub links in the JSON-LD block.
9. Optional: replace `public/og-image.png` with your own 1200x630 image.

## Contact form setup (Formspree, free)

1. Sign up at https://formspree.io and create a new form.
2. Copy the form ID (the part after `/f/` in `https://formspree.io/f/xxxxxxxx`).
3. Locally: put it in `.env` as `VITE_FORMSPREE_ID=xxxxxxxx`.
4. On Vercel: add the same variable under Project Settings → Environment Variables, then redeploy.

Without the ID the form opens the visitor's email app instead of sending.

## GitHub repository setup

```bash
cd kavin-portfolio
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
```

Create an empty repository on https://github.com/new (no README or .gitignore), then:

```bash
git remote add origin https://github.com/<your-username>/kavin-portfolio.git
git push -u origin main
```

`.env` is git-ignored, so your form ID is not committed.

## Deploy to Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. Click **Add New → Project** and import the `kavin-portfolio` repository.
3. Vercel auto-detects Vite. Confirm: Build Command `npm run build`, Output Directory `dist`.
4. Open **Environment Variables** and add `VITE_FORMSPREE_ID` with your form ID.
5. Click **Deploy**. You will get a `*.vercel.app` URL in about a minute.
6. Update the placeholder domain (checklist step 8), commit and push. Vercel redeploys automatically on every push to `main`.
7. Optional custom domain: Project → Settings → Domains.

Using the CLI instead: `npm i -g vercel && vercel` (then `vercel --prod`).

## Customising the theme

Colours and fonts are in `tailwind.config.js` (`ink` for blacks/charcoals, `accent` for electric blue). Shared button, card and chip styles are in `src/index.css`.
