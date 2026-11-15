import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Section from './Section';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section
      id="projects"
      eyebrow="04 / Projects"
      title="Automation projects"
      description="One project per area I work in. Open any card for the problem, solution and outcome."
      className="bg-ink-900/60"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.06}>
            <ProjectCard project={p} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </Section>
  );
}
