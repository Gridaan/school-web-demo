// src/components/PrincipalPage/PrincipalPage.jsx
import TopBar        from "../shared/TopBar";
import PrincipalIntro from "./PrincipalIntro";
import MessageBody   from "./MessageBody";
import PillarStrip   from "./PillarStrip";
import ClosingSection from "./ClosingSection";
import PageFooterTag  from "../shared/PageFooterTag";


export default function PrincipalPage() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen">
      <PrincipalIntro />
      <MessageBody />
      <PillarStrip />
      <ClosingSection />
      <PageFooterTag pageName="Principal's Message" />
    </main>
  );
}
