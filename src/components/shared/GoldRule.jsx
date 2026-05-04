// src/components/shared/GoldRule.jsx

/**
 * GoldRule
 * A short 48px × 2px gold horizontal rule used as a decorative divider.
 *
 * @param {string} [className] - Additional Tailwind classes
 */
export default function GoldRule({ className = "" }) {
  return (
    <div
      className={`w-12 h-0.5 bg-[var(--color-gold)] ${className}`}
      aria-hidden="true"
    />
  );
}