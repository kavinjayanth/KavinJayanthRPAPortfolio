import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import Navbar, { navIds } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';

export default function App() {
  const active = useActiveSection(navIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    // reducedMotion="user" disables movement for visitors who prefer reduced motion
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <Navbar active={active} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}
