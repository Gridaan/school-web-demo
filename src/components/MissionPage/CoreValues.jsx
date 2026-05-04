// src/components/MissionPage/CoreValues.jsx
import SectionEyebrow from "../shared/SectionEyebrow";
import ValueCard from "./ValueCard";
import { VALUES } from "../../data/schoolData";

/**
 * CoreValues
 * Dark navy section with a 2 × 2 responsive grid of ValueCards.
 */
export default function CoreValues() {
  return (
    <section className="bg-[var(--color-navy)] px-10 py-12">
      <SectionEyebrow text="Core Values" className="mb-9" />

      <div className="grid grid-cols-2 gap-6">
        {VALUES.map((value) => (
          <ValueCard key={value.num} {...value} />
        ))}
      </div>
    </section>
  );
}