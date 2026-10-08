"use client";

import Experience from "./components/experience";
import  Navbar  from "./components/navbar";
import About from "./components/about";
import Career from "./components/career";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Goals from "./components/goals";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">

        <Navbar />

        <Hero />

        <About />

        <Career />

        <Experience />

        <Skills />

        <Projects />

        <Goals />

        <Contact />

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Harnish Prajapati.
        </footer>

      </main>
    </div>
  );
}