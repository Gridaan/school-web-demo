// src/components/MissionPage/MissionHero.jsx
import GoldRule from "../shared/GoldRule";
import { SCHOOL } from "../../data/schoolData";

/**
 * MissionHero
 * Full-width navy hero with decorative concentric circle motifs,
 * school branding, and the page title.
 */
export default function MissionHero() {
  return (
    <section className="relative bg-[var(--color-navy)] overflow-hidden px-10 pt-14 pb-12">
      {/* ── Decorative circles (top-right) ── */}
      <span
        aria-hidden="true"
        className="deco-circle absolute -top-16 -right-16 w-60 h-60"
      />
      <span
        aria-hidden="true"
        className="deco-circle absolute -top-5 -right-5 w-28 h-28"
      />

      {/* ── Eyebrow ── */}
      <p className="eyebrow mb-5 animate-fade-up">
        {SCHOOL.name} · {SCHOOL.tagline}
      </p>

      {/* ── Title ── */}
      <h1
        className="font-display text-[2.6rem] font-semibold text-[var(--color-white)] leading-tight mb-5
                   animate-fade-up animate-fade-up-delay-1"
      >
        Our{" "}
        <em className="not-italic italic text-[var(--color-gold-light)]">Mission</em>
        <br />
        &amp; Purpose
      </h1>

      {/* ── Gold rule ── */}
      <GoldRule className="mb-5 animate-fade-up animate-fade-up-delay-2" />

      {/* ── Sub-heading ── */}
      <p
        className="font-body text-[1.2rem] font-light text-[var(--color-white)]/75 leading-relaxed max-w-lg
                   animate-fade-up animate-fade-up-delay-3"
      >
        Educating the whole child — mind, character, and spirit — for a life of
        meaning and contribution.
      </p>
    </section>
  );
}
