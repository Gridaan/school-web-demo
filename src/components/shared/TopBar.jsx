// src/components/shared/TopBar.jsx
import { SCHOOL } from "../../data/schoolData";

/**
 * TopBar
 * Slim navy navigation bar showing school brand + current page name.
 *
 * @param {string} currentPage - Label shown on the right e.g. "Principal's Message"
 */
export default function TopBar({ currentPage }) {
    return (
        <nav
            className="bg-[var(--color-navy)] px-10 py-3.5 flex items-center justify-between"
            aria-label="Site navigation"
        >
            <span className="font-ui text-xs tracking-widest2 uppercase text-[var(--color-white)]/60 font-normal">
                {SCHOOL.name}
            </span>
            <span className="eyebrow">{currentPage}</span>
        </nav>
    );
}
