// src/components/MissionPage/StatCard.jsx

/**
 * StatCard
 * White raised card showing a key metric with a label.
 *
 * @param {string} num   - Metric value e.g. "98%"
 * @param {string} label - Metric description
 */
export default function StatCard({ num, label }) {
  return (
    <div className="bg-[var(--color-white)] border-hairline rounded-md px-5 py-5">
      {/* ── Metric number ── */}
      <p className="font-display text-[2rem] font-semibold leading-none text-[var(--color-navy)] mb-1">
        {num.split(/(%|:|\+)/).map((part, i) =>
          /(%|:|\+)/.test(part) ? (
            <span key={i} className="text-[var(--color-gold)]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>

      {/* ── Label ── */}
      <p className="font-ui text-xs text-[var(--color-muted)] font-normal">{label}</p>
    </div>
  );
}
