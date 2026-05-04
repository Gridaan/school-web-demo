
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import MissionPage from "./components/MissionPage/MissionPage";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";

function Navbar() {
  return (
    <nav className="bg-[var(--color-navy-mid)] sticky top-0 z-50 px-10 py-3.5 flex items-center justify-between">
      <span className="font-ui text-xs tracking-widest uppercase text-[var(--color-white)]/60">
        Greenfield Academy
      </span>
      <div className="flex gap-1">
        <NavLink
          to="/mission"
          className={({ isActive }) =>
            `px-5 py-2 font-ui text-[11px] font-medium tracking-widest uppercase border-b-2 transition-colors duration-200
            ${isActive ? "border-[var(--color-gold)] text-[var(--color-gold)]" : "border-transparent text-[var(--color-white)]/50 hover:text-[var(--color-white)]"}`
          }
        >
          Mission
        </NavLink>
        <NavLink
          to="/principal-message"
          className={({ isActive }) =>
            `px-5 py-2 font-ui text-[11px] font-medium tracking-widest uppercase border-b-2 transition-colors duration-200
            ${isActive ? "border-[var(--color-gold)] text-[var(--color-gold)]" : "border-transparent text-[var(--color-white)]/50 hover:text-[var(--color-white)]"}`
          }
        >
          Principal's Message
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-cream-dark)]">
        <Navbar />
        <div className="max-w-3xl mx-auto shadow-lg">
          <Routes>
            <Route path="/" element={<MissionPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/principal-message" element={<PrincipalPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

