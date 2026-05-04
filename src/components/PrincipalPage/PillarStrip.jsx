// src/components/PrincipalPage/PillarStrip.jsx
import { PILLARS } from "../../data/schoolData";

/**
 * PillarStrip
 * White horizontal band with 3 equal columns showing the school's
 * core pedagogical pillars, separated by hairline vertical dividers.
 */
export default function PillarStrip() {
  return (
    <aside
      className="bg-[var(--color-white)] border-t border-b border-[var(--color-navy)]/8 px-10 py-7
                 grid grid-cols-3"
      aria-label="School pillars"
    >
      {PILLARS.map((pillar, i) => (
        <div
          key={pillar.label}
          className={`px-5 text-center
            ${i < PILLARS.length - 1 ? "border-r border-[var(--color-navy)]/8" : ""}
            ${i === 0 ? "pl-0" : ""}
            ${i === PILLARS.length - 1 ? "pr-0" : ""}
          `}
        >
          {/* ── Diamond icon ── */}
          <span
            className="block text-[var(--color-gold)] text-lg mb-2 leading-none"
            aria-hidden="true"
          >
            ◆
          </span>

          {/* ── Pillar name ── */}
          <p className="font-display text-sm font-semibold text-[var(--color-navy)] mb-1">
            {pillar.label}
          </p>

          {/* ── Short description ── */}
          <p className="font-ui text-[11px] text-[var(--color-muted)] leading-relaxed">
            {pillar.sub}
          </p>
        </div>
      ))}
    </aside>
  );
}
