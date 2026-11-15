import Reveal from './Reveal';

/** Shared wrapper giving every section the same spacing, heading and anchor offset. */
export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-16 py-20 sm:py-28 ${className}`}
    >
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {description && <p className="mt-4 max-w-2xl text-base leading-relaxed">{description}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
