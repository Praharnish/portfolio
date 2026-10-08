import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";



export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
          <Link
            href="/#projects"
            className="text-sm text-violet-300 transition hover:text-violet-200"
          >
            ← Back to Projects
          </Link>

          <h1 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Project Not Found
          </h1>

          <p className="mt-4 max-w-xl text-lg text-slate-400">
            The project you are looking for does not exist or may have been
            moved.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">

        {/* BACK */}
        <Link
          href="/#projects"
          className="text-sm text-violet-300 transition hover:text-violet-200"
        >
          ← Back to Projects
        </Link>

        {/* HEADER */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
        </header>

        {/* PROJECT IMAGE */}
        {project.image && (
          <section className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.5)]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </section>
        )}

        {/* PROJECT OVERVIEW */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            Project Overview
          </h2>

          <ul className="mt-5 space-y-4 text-lg leading-8 text-slate-300">
            {project.description.map((item, index) => (
              <li
                key={index}
                className="relative pl-7"
              >
                <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-violet-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Key Highlights
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-3 h-2 w-10 rounded-full bg-violet-500" />

                <p className="text-sm font-medium leading-6 text-slate-200">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Technologies
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECT REPOSITORY */}
        {project.repository &&
          project.repository !== null && (
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-white">
                Project Repository
              </h2>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      View the source code
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                      Explore the source code, project structure, documentation,
                      and implementation details on the project&apos;s repository.
                    </p>
                  </div>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/20 hover:text-white"
                  >
                    View
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </section>
          )}

        {/* CAREER CONNECTION */}
        <section className="mt-14 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            What This Project Demonstrates
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Practical software development experience
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            This project represents my hands-on experience applying software
            development concepts to a working application. It allowed me to
            work with APIs, databases, authentication, debugging, and
            application architecture while developing my skills toward a
            professional software development career.
          </p>
        </section>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-white/10"
          >
            ← View All Projects
          </Link>
        </div>

      </div>
    </main>
  );
}
