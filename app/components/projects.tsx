import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
    return(
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

                            {/* TITLE + YEAR */}
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <span className="shrink-0 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                                    {project.date}
                                </span>
                            </div>

                            {/* CATEGORY */}
                            <p className="mt-2 text-sm font-medium text-slate-400">
                                {project.category}
                            </p>

                            {/* SUMMARY */}
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
    );
}