// src/components/PrincipalPage/ClosingSection.jsx
import { PRINCIPAL } from "../../data/schoolData";

/**
 * ClosingSection
 * Closing paragraphs, italic signature text, printed name/role, and seal mark.
 */
export default function ClosingSection() {
  return (
    <section className="px-10 pt-10 pb-14">
      {/* ── Closing paragraphs ── */}
      {PRINCIPAL.closing.map((para, i) => (
        <p
          key={i}
          className="font-body text-lg font-normal leading-loose text-[var(--color-text-dark)] mb-5 last:mb-9"
        >
          {para}
        </p>
      ))}

      {/* ── Signature row ── */}
      <div
        className="flex items-end gap-6 pt-6 border-t border-[var(--color-navy)]/10"
        aria-label="Signature"
      >
        {/* Left: italic name + printed details */}
        <div className="flex-1">
          {/* Italic display-font signature */}
          <p className="signature-text mb-2">{PRINCIPAL.name}</p>

          <p className="font-ui text-[13px] font-medium text-[var(--color-navy)] mb-0.5">
            {PRINCIPAL.name}, Ph.D.
          </p>
          <p className="font-ui text-xs text-[var(--color-muted)] font-light">
            Principal &amp; Head of School · Academic Year 2024–25
          </p>
        </div>

        {/* Right: decorative seal circle */}
        <div
          className="w-[52px] h-[52px] rounded-full border border-[var(--color-gold)] flex-shrink-0
                     flex items-center justify-center
                     font-display text-[11px] font-semibold text-[var(--color-gold)]
                     text-center leading-tight tracking-wide"
          aria-hidden="true"
        >
          GA
          <br />
          SEAL
        </div>
      </div>
    </section>
  );
}
