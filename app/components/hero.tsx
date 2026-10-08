import Image from "next/image";
import { portfolio } from "../data/portfolio";
import profileImage from "../../public/profile.jpg";

export default function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020] px-6 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.85)] md:px-10 md:py-14">
            <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
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
    );
}