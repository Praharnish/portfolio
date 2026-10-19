"use client";

import {navigation} from "@/data/navigation";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-4 z-50 mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(128,90,213,0.15)] backdrop-blur-xl">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="text-lg font-semibold tracking-[0.15em] text-white"
      >
        HARNISH PRAJAPATI
      </button>

      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-6 text-sm text-slate-300 md:flex"
      >
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:rounded-sm"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}