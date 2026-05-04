// src/components/MissionPage/MissionStatement.jsx
import SectionEyebrow from "../shared/SectionEyebrow";
import { MISSION } from "../../data/schoolData";

/**
 * MissionStatement
 * Displays the school's official mission quote with supporting body copy.
 */
export default function MissionStatement() {
  return (
    <section className="px-10 py-14 border-b border-[var(--color-navy)]/10">
      <SectionEyebrow text={MISSION.eyebrow} className="mb-6" />

      {/* ── Blockquote ── */}
      <blockquote className="blockquote-gold mb-7">
        <p className="font-display text-2xl font-normal leading-relaxed text-[var(--color-navy)]">
          "{MISSION.quote}"
        </p>
      </blockquote>

      {/* ── Body paragraphs ── */}
      {MISSION.body.map((para, i) => (
        <p
          key={i}
           className="font-body text-lg font-normal leading-loose text-[var(--color-muted)] mb-4 last:mb-0"
        >
          {para}
        </p>
      ))}
    </section>
  );
}