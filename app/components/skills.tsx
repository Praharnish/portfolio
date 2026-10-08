import { skills } from "../data/skills";

export default function Skills() {
    return (
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
    );
}