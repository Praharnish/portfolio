import { career } from "../data/career";

export default function Career() {
    return (
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
    );
}