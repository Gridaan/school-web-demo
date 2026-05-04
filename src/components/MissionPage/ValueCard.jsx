// src/components/MissionPage/ValueCard.jsx

/**
 * ValueCard
 * Individual value card rendered on the dark navy background.
 *
 * @param {string} num   - Zero-padded number e.g. "01"
 * @param {string} name  - Value name e.g. "Integrity"
 * @param {string} desc  - Short description sentence
 */
export default function ValueCard({ num, name, desc }) {
  return (
      <article
        className="border border-[var(--color-gold)]/20 rounded-md p-6
                  hover:border-[var(--color-gold)]/40 transition-colors duration-300"
      >
        {/* ── Large dim number ── */}
        <p
          className="font-display text-4xl font-semibold text-[var(--color-gold)]/20
                    leading-none mb-2 select-none"
          aria-hidden="true"
        >
          {num}
        </p>

        {/* ── Value name ── */}
        <h3 className="font-display text-base font-semibold text-[var(--color-gold-light)] mb-2.5">
          {name}
        </h3>

      {/* ── Description ── */}
      <p className="font-ui text-[13px] font-light leading-relaxed text-[var(--color-white)]/60">
        {desc}
      </p>
    </article>
  );
}
