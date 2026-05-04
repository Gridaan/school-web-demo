

/**
 * PullQuote
 * Dark navy block with a decorative large quote mark, italic quote text,
 * and attribution line.
 *
 * @param {string} text        - The quote body
 * @param {string} attribution - Who said it (e.g. "Dr. Sheila Raveendra, Principal")
 */
export default function PullQuote({ text, attribution }) {
  return (
    <figure
      className="bg-[var(--color-navy)] rounded-md px-9 py-8 my-9"
      role="figure"
      aria-label="Principal's key quote"
    >
      {/* ── Decorative large quote mark ── */}
      <span
        className="font-display text-[4rem] leading-[0.6] text-[var(--color-gold)]/35
                   block mb-3 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* ── Quote text ── */}
      <blockquote>
        <p className="font-display text-xl font-normal italic text-[var(--color-white)]/90 leading-relaxed mb-4">
          {text}
        </p>

        {/* ── Attribution ── */}
        <figcaption className="eyebrow">
          — {attribution}
        </figcaption>
      </blockquote>
    </figure>
  );
}
