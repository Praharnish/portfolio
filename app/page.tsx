import Link from "next/link";
import Image from "next/image";
import profileImage from "../public/profile.jpg";

import { portfolio } from "../data/portfolio";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { career } from "../data/career";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">

        {/* NAVIGATION */}
        <header className="sticky top-4 z-50 mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(128,90,213,0.15)] backdrop-blur-xl">
          <div className="text-lg font-semibold tracking-[0.15em] text-white">
            HARNISH PRAJAPATI
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#career" className="transition hover:text-white">
              Career
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020] px-6 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.85)] md:px-10 md:py-14">


          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">

            {/* HERO CONTENT */}
            <div>
              <p className="mb-4 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-200">
                {portfolio.hero.label}
              </p>

              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
                {portfolio.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {portfolio.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
                >
                  Explore My Projects
                </a>

                <a
                  href="#career"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-violet-400/50 hover:bg-white/10"
                >
                  My Career Journey
                </a>
              </div>

              {/* STATS */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-sm text-slate-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="relative h-[340px] w-[280px] rounded-[2rem] border border-white/10 bg-[#111827] p-4 shadow-[0_0_50px_rgba(15,23,42,0.5)]">

                <div className="absolute inset-x-8 top-6 h-16 rounded-full bg-violet-500/30 blur-2xl" />

                <div className="relative flex h-full items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0b1020]">

                  <div className="flex h-48 w-40 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 p-1 shadow-[0_0_35px_rgba(168,85,247,0.7)]">
                    <Image
                      src={profileImage}
                      alt="Harnish Prajapati"
                      width={160}
                      height={192}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 mt-16 grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              {portfolio.about.label}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              {portfolio.about.title}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-lg leading-8 text-slate-300 backdrop-blur-sm">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* CAREER DEVELOPMENT */}
        <section id="career" className="scroll-mt-24 mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            {career.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {career.title}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {career.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconStyle} text-xl`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

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