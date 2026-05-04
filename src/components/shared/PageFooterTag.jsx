// src/components/shared/PageFooterTag.jsx
import { SCHOOL } from "../../data/schoolData";

/**
 * PageFooterTag
 * Subtle footer strip with a gold dot and page/year label.
 *
 * @param {string} pageName - e.g. "Mission & Values"
 */
export default function PageFooterTag({ pageName }) {
  return (
    <footer className="px-10 py-7 flex items-center gap-3">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0"
        aria-hidden="true"
      />
      <p className="font-ui text-[11px] tracking-wide text-[var(--color-muted)]">
        {SCHOOL.name} · {pageName} · {SCHOOL.year}
      </p>
    </footer>
  );
}