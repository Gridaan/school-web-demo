// src/components/MissionPage/MissionPage.jsx
import MissionHero       from "./MissionHero.jsx";
import MissionStatement  from "./MissionStatement";
import CoreValues        from "./CoreValues";
import PhilosophySection from "./PhilosophySection";
import PageFooterTag     from "../shared/PageFooterTag";


export default function MissionPage() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen">
      <MissionHero />
      <MissionStatement />
      <CoreValues />
      <PhilosophySection />
      <PageFooterTag pageName="Mission & Values" />
    </main>
  );
}