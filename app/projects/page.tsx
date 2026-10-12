import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function AllProjectsPage() {
    return (
        <main className="min-h-screen bg-[#050816] px-6 pb-20 pt-32 text-slate-100 md:px-10">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/"
                    className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
                >
                    ← Back to Home
                </Link>

                <header className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                        Portfolio
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        All Projects
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                        Explore my projects, including full-stack applications,
                        REST APIs, database systems, and software development
                        experiments.
                    </p>

                    <p className="mt-4 text-sm text-slate-500">
                        {projects.length} projects
                    </p>
                </header>

                <div className="mt-10 flex flex-col gap-6 mx-auto max-w-5xl px-6 py-12 md:px-10">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:border-violet-400/30"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.5)]">
                                {project.image ? (
                                    <Image
                                        loading="eager"
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1024px"
                                        className="object-cover"
                                    />
                                ) : (
                                    <div
                                    className={`flex h-full items-center justify-center bg-gradient-to-r ${project.accent}`}
                                    >
                                        <div className="text-center">
                                            <div className="text-5xl font-black text-white/90">
                                                {project.title.charAt(0)}
                                            </div>

                                            <p className="mt-1 text-xl font-medium uppercase tracking-[0.2em] text-white/70">
                                                Project
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <h2 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h2>

                                    {project.date && (
                                        <span className="shrink-0 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                                            {project.date}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-2 text-sm font-medium text-slate-400">
                                    {project.category}
                                </p>

                                <p className="mt-3 leading-7 text-slate-300">
                                    {project.summary}
                                </p>

                                <p className="mt-5 text-sm font-medium text-violet-300">
                                    View project →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}