import Link from "next/link";
import profileImage from "../public/profile.jpg";

const stats = [
  { label: "Experience", value: "3+ years" },
  { label: "Projects", value: "12+" },
  { label: "Clients", value: "8" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "UI Design",
  "REST APIs",
  "Problem Solving",
];

const projects = [
  {
    slug: "mail-management-system",
    title: "Mail Management System",
    description:
      "A full-stack application for managing mail messages with authentication and role-based access control.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "interactive-recipe-book",
    title: "Interactive Recipe Book",
    description:
      "A full-stack application for managing and sharing recipes with a modern UI.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    slug: "portfolio-system",
    title: "Portfolio System",
    description:
      "A modern personal portfolio focused on clean design and developer experience.",
    accent: "from-amber-500 to-orange-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(128,90,213,0.15)] backdrop-blur-xl">
          <div className="text-lg font-semibold tracking-[0.2em] text-white">Harnish Prajapati</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.22),transparent_30%),linear-gradient(135deg,#0b1120_0%,#111827_40%,#070b16_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.85)] md:px-10 md:py-14">
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-200">
                Available for freelance work
              </p>
              <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
                I design and build digital products that feel premium.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                I’m Harnish Prajapati, a developer and designer crafting clean experiences,
                thoughtful interfaces, and modern websites that help brands grow with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-violet-400/50 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-[340px] w-[280px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/20 p-4 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                <div className="absolute inset-x-8 top-6 h-16 rounded-full bg-violet-500/30 blur-2xl" />
                <div className="relative flex h-full items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0b1020]">
                  <div className="flex h-46 w-37 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 text-4xl font-black text-white shadow-[0_0_35px_rgba(168,85,247,0.7)]">
                    <img src={profileImage.src} alt="Harnish Prajapati" className="h-45 w-36 rounded-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Turning ideas into memorable experiences.</h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-lg leading-8 text-slate-300 backdrop-blur-sm">
            I help brands and businesses shape digital experiences that feel unique, modern, and easy to trust. My work blends interface design, frontend engineering, and product thinking to create experiences people actually enjoy using.
          </div>
        </section>

        <section id="skills" className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Skills</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Selected work</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className={`h-28 bg-gradient-to-r ${project.accent}`} />

                <div className="p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-base font-bold text-white">
                    {project.title.charAt(0)}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 text-sm font-medium text-violet-300">
                    View project →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 px-6 py-10 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">Contact</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let’s build something bold and memorable.
            </h2>
            <a
              href="mailto:harnish@example.com"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              harnish@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

