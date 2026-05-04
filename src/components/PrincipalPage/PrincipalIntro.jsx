// src/components/PrincipalPage/PrincipalIntro.jsx
import { PRINCIPAL } from "../../data/schoolData";


export default function PrincipalIntro() {
  return (
    <section
      className="px-10 pt-12 pb-0 grid gap-7"
      style={{ gridTemplateColumns: "120px 1fr" }}
    >
      {/* ── Left: Avatar + connector ── */}
      <div className="flex flex-col items-center gap-3">
        {/* Initials avatar — replace with <img> for real photo */}
        <div
          className="w-24 h-24 rounded-full bg-[var(--color-navy)] border-2 border-[var(--color-gold)]
                     flex items-center justify-center flex-shrink-0"
          aria-label={`Photo of ${PRINCIPAL.name}`}
        >
          <span className="font-display text-2xl font-semibold text-[var(--color-gold-light)]">
            {PRINCIPAL.initials}
          </span>
        </div>

        {/* Vertical connector rule */}
        <div
          className="w-px flex-1 min-h-[40px] bg-[var(--color-gold)]/30"
          aria-hidden="true"
        />
      </div>

      {/* ── Right: Meta ── */}
      <div className="pt-2">
        <p className="eyebrow mb-2.5">A word from our Principal</p>

        <h1 className="font-display text-[1.75rem] font-semibold text-[var(--color-navy)] leading-tight mb-1.5">
          {PRINCIPAL.name}
        </h1>

        <p className="font-ui text-[13px] text-[var(--color-muted)] font-light mb-4">
          {PRINCIPAL.title}
        </p>

        {/* ── Credential list ── */}
        <ul className="flex flex-col gap-1.5" aria-label="Credentials">
          {PRINCIPAL.credentials.map((cred) => (
            <li key={cred} className="flex items-center gap-2">
              <span
                className="w-1 h-1 rounded-full bg-[var(--color-gold)] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-ui text-xs text-[var(--color-muted)] font-normal">
                {cred}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
