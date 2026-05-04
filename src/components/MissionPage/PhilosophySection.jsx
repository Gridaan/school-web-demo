// src/components/MissionPage/PhilosophySection.jsx
import SectionEyebrow from "../shared/SectionEyebrow";
import StatCard from "./StatCard";
import { PHILOSOPHY, STATS } from "../../data/schoolData";

/**
 * PhilosophySection
 * Two-column layout: left = heading + body copy, right = stat cards stack.
 */
export default function PhilosophySection() {
  return (
    <section className="px-10 py-14 grid grid-cols-2 gap-10 border-b border-[var(--color-navy)]/10">
      {/* ── Left: Philosophy text ── */}
      <div>
        <SectionEyebrow text="Our Philosophy" className="mb-5" />
        <h2 className="font-display text-[1.4rem] font-semibold text-[var(--color-navy)] leading-snug mb-4">
          {PHILOSOPHY.heading}
        </h2>
        <p className="font-body text-[1.05rem] leading-loose text-[var(--color-muted)]">
          {PHILOSOPHY.body}
        </p>
      </div>

      {/* ── Right: Stat cards ── */}
      <div className="flex flex-col gap-5">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}