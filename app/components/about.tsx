import { portfolio } from "../data/portfolio";

export default function About() {
    return (
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
    );
}