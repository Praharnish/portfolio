"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "../data/experience";

export default function Experience() {
    const [activeExperience, setActiveExperience] = useState<number | null>(
        null
    );

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const updateActiveCard = () => {
        const viewportHeight = window.innerHeight;

        const activationStart = viewportHeight * 0.32;
        const activationEnd = viewportHeight * 0.68;
        const activationCenter = viewportHeight * 0.5;

        let closestIndex: number | null = null;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, index) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;

            const isInsideActivationZone =
            cardCenter >= activationStart &&
            cardCenter <= activationEnd;

            if (!isInsideActivationZone) return;

            const distance = Math.abs(cardCenter - activationCenter);

            if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
            }
        });

        if (closestIndex !== null) {
            setActiveExperience(closestIndex);
        }
        };

        let ticking = false;

        const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
            updateActiveCard();
            ticking = false;
            });

            ticking = true;
        }
        };

        updateActiveCard();

        window.addEventListener("scroll", handleScroll, {
        passive: true,
        });

        window.addEventListener("resize", updateActiveCard);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateActiveCard);
        };
    }, []);

    return (
        <section id="experience" className="scroll-mt-24 mt-20">
        {/* HEADER */}
        <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Growing through experience
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
            Every experience has helped me develop new skills, take on greater
            responsibilities, and grow professionally.
            </p>
        </div>

        {/* EXPERIENCE AREA */}
        <div className="relative">
            {/* CLIMBING PLANT TRUNK */}
            <div
            className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                bottom-0
                w-[3px]
                -translate-x-1/2
                rounded-full
                bg-violet-400/[0.10]
                blur-[1px]
            "
            />

            <div
            className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                bottom-0
                w-24
                -translate-x-1/2
                rounded-full
                bg-violet-500/[0.025]
                blur-3xl
            "
            />

            <div
            className="
                pointer-events-none
                absolute
                left-[calc(50%-2px)]
                top-0
                bottom-0
                w-12
                -translate-x-1/2
                opacity-30
            "
            >
            <div
                className="
                absolute
                left-1/2
                top-0
                h-full
                w-[2px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-b
                from-transparent
                via-violet-400/30
                to-transparent
                "
            />
            </div>

            {/* EXPERIENCE CARDS */}
            <div className="relative space-y-20 md:space-y-28">
            {experience.map((item, index) => {
                const isOpen = activeExperience === index;

                return (
                <div
                    key={`${item.company}-${item.role}`}
                    ref={(element) => {
                    cardRefs.current[index] = element;
                    }}
                    className={`
                    relative
                    max-w-3xl
                    transition-all
                    duration-700

                    ${
                        index % 2 === 0
                        ? "md:ml-[8%]"
                        : "md:ml-auto md:mr-[8%]"
                    }
                    `}
                >
                    {/* BRANCH CONNECTOR */}
                    <div
                    className={`
                        pointer-events-none
                        absolute
                        top-1/2
                        hidden
                        h-px
                        w-16
                        -translate-y-1/2
                        md:block

                        ${
                        index % 2 === 0
                            ? "right-[-4rem] bg-gradient-to-r from-violet-400/0 to-violet-400/25"
                            : "left-[-4rem] bg-gradient-to-l from-violet-400/0 to-violet-400/25"
                        }
                    `}
                    />

                    {/* CARD */}
                    <div
                    className={`
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        bg-white/5
                        p-6
                        backdrop-blur-sm
                        transition-all
                        duration-700
                        ease-out

                        ${
                        isOpen
                            ? `
                            border-violet-400/30
                            bg-white/[0.07]
                            shadow-[0_25px_60px_rgba(139,92,246,0.12)]
                            -translate-y-1
                            `
                            : `
                            border-white/10
                            `
                        }
                    `}
                    >
                    {/* ORGANIC GLOW */}
                    <div
                        className={`
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        blur-3xl
                        transition-all
                        duration-1000

                        ${
                            isOpen
                            ? "scale-150 bg-violet-400/15"
                            : "scale-100 bg-violet-400/5"
                        }
                        `}
                    />

                    {/* SECONDARY FUCHSIA GLOW */}
                    <div
                        className={`
                        pointer-events-none
                        absolute
                        -bottom-20
                        -left-20
                        h-32
                        w-32
                        rounded-full
                        blur-3xl
                        transition-all
                        duration-1000

                        ${
                            isOpen
                            ? "scale-150 bg-fuchsia-400/10"
                            : "scale-100 bg-fuchsia-400/5"
                        }
                        `}
                    />

                    {/* HEADER */}
                    <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                        <span
                            className="
                            rounded-full
                            border border-violet-400/20
                            bg-violet-400/10
                            px-3 py-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-violet-300
                            "
                        >
                            {item.period}
                        </span>

                        <span className="text-xs text-slate-500">
                            {item.type}
                        </span>
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-white">
                        {item.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-violet-300">
                            {item.company}
                        </span>

                        <span className="text-slate-600">•</span>

                        <span className="text-sm text-slate-400">
                            {item.location}
                        </span>
                        </div>
                    </div>

                    {/* EXPANDING CONTENT */}
                    <div
                        className={`
                        grid
                        transition-all
                        duration-1000
                        ease-in-out

                        ${
                            isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                        `}
                    >
                        <div className="overflow-hidden">
                        <div className="pt-5">
                            <p className="text-sm leading-7 text-slate-300">
                            {item.description}
                            </p>

                            <div className="mt-5 space-y-3">
                            {item.achievements.map((achievement) => (
                                <div
                                key={achievement}
                                className="
                                    flex
                                    gap-3
                                    text-sm
                                    leading-6
                                    text-slate-300
                                "
                                >
                                <span
                                    className="
                                    mt-2
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-violet-400
                                    "
                                />

                                <span>{achievement}</span>
                                </div>
                            ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                            {item.technologies.map((technology) => (
                                <span
                                key={technology}
                                className={`
                                    rounded-full
                                    border
                                    px-3
                                    py-1
                                    text-xs
                                    transition-all
                                    duration-700

                                    ${
                                    isOpen
                                        ? `
                                        border-violet-400/20
                                        bg-violet-400/5
                                        text-violet-200
                                        `
                                        : `
                                        border-white/10
                                        bg-black/20
                                        text-slate-400
                                        `
                                    }
                                `}
                                >
                                {technology}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* ACTIVE INDICATOR */}
                    <div className="relative mt-5 flex items-center gap-2">
                        <span
                        className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            transition-all
                            duration-700

                            ${
                            isOpen
                                ? "scale-125 bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                                : "bg-slate-600"
                            }
                        `}
                        />

                        <span
                        className={`
                            text-xs
                            transition-colors
                            duration-700

                            ${
                            isOpen
                                ? "text-violet-300"
                                : "text-slate-600"
                            }
                        `}
                        />
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
}