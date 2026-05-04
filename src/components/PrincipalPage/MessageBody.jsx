// src/components/PrincipalPage/MessageBody.jsx
import PullQuote from "./PullQuote";
import { PRINCIPAL } from "../../data/schoolData";


export default function MessageBody() {
  return (
    <section className="px-10 pt-11 pb-0">
      {/* ── Salutation ── */}
      <p className="font-display text-xl italic text-[var(--color-navy)] mb-7">
        Dear Students, Parents &amp; Friends of Greenfield,
      </p>

      {/* ── Opening paragraphs ── */}
      {PRINCIPAL.message.map((para, i) => (
        <p
          key={i}
          className="font-body text-lg font-normal leading-loose text-[var(--color-text-dark)] mb-5 last:mb-0"
        >
          {para}
        </p>
      ))}

      {/* ── Pull quote ── */}
      <PullQuote
        text={PRINCIPAL.pullquote}
        attribution={PRINCIPAL.name + ", Principal"}
      />
    </section>
  );
}
