import { portfolio } from "../data/portfolio";

export default function Contact() {
    return (
        <section
          id="contact"
          className="scroll-mt-24 mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 px-6 py-10 md:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
            {portfolio.contact.label}
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                {portfolio.contact.title}
              </h2>

              <p className="mt-3 max-w-xl text-slate-300">
                {portfolio.contact.description}
              </p>
            </div>

            <a
              href={`mailto:${portfolio.contact.email}`}
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Get in touch
            </a>
          </div>
        </section>
    );
}