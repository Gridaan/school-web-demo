// src/components/shared/SectionEyebrow.jsx

/**
 * SectionEyebrow
 * Small all-caps gold label used above section headings.
 *
 * @param {string}  text      - Label text
 * @param {string}  [className] - Additional Tailwind classes
 */
export default function SectionEyebrow({ text, className = "" }) {
  return (
      <p
        className={`font-ui text-[11px] font-medium tracking-widest2 uppercase text-[var(--color-gold)] ${className}`}
      >
      {text}
    </p>
  );
}