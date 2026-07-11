import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  // { id: "freelance", label: "Freelance" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) {
          current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,720px)] transition-all duration-500 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <div
        className={`flex items-center justify-between rounded-full px-5 md:px-6 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-[#111]/70 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#home">
          <img src="/favicon.png" alt="Logo" className="w-10 h-10" />
        </a>
        <nav className="hidden md:flex items-center gap-5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative px-3 py-1.5 text-[13px] rounded-full transition-colors ${
                active === s.id ? "text-white" : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              {active === s.id && (
                <span className="absolute inset-0 rounded-full bg-white/[0.06]" />
              )}
              <span className="relative">{s.label}</span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-[13px] px-3.5 py-1.5 rounded-full bg-white text-[#0A0A0A] hover:bg-white/90 transition-colors font-medium"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
