
import { portfolio } from "@/data/portfolio";

const themeStyles = {
  violet: {
    card: "border-violet-400/20 bg-violet-500/[0.07]",
    icon: "bg-violet-400/15",
  },
  orange: {
    card: "border-orange-400/20 bg-orange-500/[0.06]",
    icon: "bg-orange-400/15",
  },
  cyan: {
    card: "border-cyan-400/15 bg-cyan-400/[0.04]",
    icon: "bg-cyan-400/10",
  },
} as const;

export default function About() {
  const { about } = portfolio;

  return (
    <section
      id="about"
      className="mt-24 scroll-mt-24 space-y-10"
    >
      {/* Section heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          {about.label}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {about.title}
        </h2>
      </div>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        {/* Introduction */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-xl">
              {about.intro.icon}
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {about.intro.title}
              </h3>

              <p className="text-sm text-slate-400">
                {about.intro.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            {about.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Information cards */}
        <div className="flex flex-col gap-6">
          {about.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-3xl border p-6 ${
                themeStyles[card.theme].card
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${
                    themeStyles[card.theme].icon
                  }`}
                >
                  {card.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {card.title}
                  </h3>

                  {card.subtitle && (
                    <p className="mt-1 text-sm text-slate-400">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div
        className={`rounded-3xl border p-6 sm:p-8 ${
          themeStyles[about.closing.theme].card
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${
              themeStyles[about.closing.theme].icon
            }`}
          >
            {about.closing.icon}
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-white">
              {about.closing.title}
            </h3>

            <p className="text-base leading-8 text-slate-300">
              {about.closing.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
