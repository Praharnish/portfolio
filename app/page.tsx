"use client";

import Link from "next/link";
import Image from "next/image";

import { portfolio } from "./data/portfolio";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import Experience from "./components/experience";
import  Navbar  from "./components/navbar";
import About from "./components/about";
import Career from "./components/career";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">

        <Navbar />

        <Hero />

        <About />

        <Career />

        <Experience />

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Technologies I work with
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Things I’ve built
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            A selection of projects that represent my experience with
            full-stack development, APIs, databases, authentication,
            application design, and modern frontend technologies.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="relative h-44 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full items-center justify-center bg-gradient-to-r ${project.accent}`}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-black text-white/90">
                          {project.title.charAt(0)}
                        </div>

                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                          Project
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-base font-bold text-white">
                    {project.title.charAt(0)}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-5 text-sm font-medium text-violet-300">
                    View project →
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* WHAT I'M WORKING TOWARD */}
        <section className="scroll-mt-24 mt-16 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            {portfolio.goals.label}
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {portfolio.goals.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {portfolio.goals.description}
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-300">
              {portfolio.goals.areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <span className="font-semibold text-white">
                    {area.title}
                  </span>

                  <p className="mt-1">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 px-6 py-10 md:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
            {portfolio.contact.label}
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                {portfolio.contact.title}
              </h2>

              <p className="mt-3 max-w-xl text-slate-300">
                {portfolio.contact.description}
              </p>
            </div>

            <a
              href={`mailto:${portfolio.contact.email}`}
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Harnish Prajapati.
        </footer>

      </main>
    </div>
  );
}