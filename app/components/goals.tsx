import { portfolio } from "../data/portfolio";

export default function Goals() {
    return (
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
        
    );
}