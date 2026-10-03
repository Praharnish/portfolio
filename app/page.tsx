import Link from "next/link";
import profileImage from "../public/profile.jpg";

const stats = [
  { label: "Semester", value: "5th" },
  { label: "Projects", value: "10+" },
  { label: "Programming", value: "C# • Java • Python" },
];

const skills = [
  "C#",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "REST APIs",
  "MongoDB",
  "Docker",
  "Unity",
  "Git & GitHub",
];

const projects = [
  {
    slug: "enterprise-web-api",
    title: "Enterprise Web API",
    description:
      "A full-stack application featuring authentication, role-based access control, REST APIs, and database integration.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "interactive-recipe-book",
    title: "Interactive Recipe Book",
    description:
      "A full-stack recipe platform built with React, Node.js, MongoDB, authentication, Cloudinary, and Android integration.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    slug: "portfolio-system",
    title: "Developer Portfolio",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS to showcase my projects, skills, and development journey.",
    accent: "from-amber-500 to-orange-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">

        {/* NAVIGATION */}
        <header className="mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(128,90,213,0.15)] backdrop-blur-xl">
          <div className="text-lg font-semibold tracking-[0.15em] text-white">
            HARNISH PRAJAPATI
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#career" className="transition hover:text-white">
              Career
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.22),transparent_30%),linear-gradient(135deg,#0b1120_0%,#111827_40%,#070b16_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.85)] md:px-10 md:py-14">

          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">

            {/* HERO CONTENT */}
            <div>
              <p className="mb-4 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-200">
                Computer Programming & Analysis • Software Developer
              </p>

              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
                Building software, exploring technology, and turning ideas into real applications.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Harnish Prajapati, a Computer Programming & Analysis student
                focused on software development, full-stack applications, and
                modern web technologies. I enjoy building practical projects
                while continuously expanding my skills across different areas
                of software engineering.
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
                {stats.map((stat) => (
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
              <div className="relative h-[340px] w-[280px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/20 p-4 shadow-[0_0_50px_rgba(139,92,246,0.2)]">

                <div className="absolute inset-x-8 top-6 h-16 rounded-full bg-violet-500/30 blur-2xl" />

                <div className="relative flex h-full items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0b1020]">

                  <div className="flex h-48 w-40 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 p-1 shadow-[0_0_35px_rgba(168,85,247,0.7)]">
                    <img
                      src={profileImage.src}
                      alt="Harnish Prajapati"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mt-16 grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Learning by building real software.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-lg leading-8 text-slate-300 backdrop-blur-sm">
            I’m currently studying Computer Programming & Analysis at Durham
            College, where I’ve developed experience across object-oriented
            programming, web development, databases, software testing, APIs,
            and application development.

            <br />
            <br />

            My development journey is strongly project-driven. From full-stack
            web applications and Android projects to Unity game development
            and database-driven applications, I use projects to turn what I
            learn in class into practical software.
          </div>
        </section>

        {/* CAREER DEVELOPMENT */}
        <section id="career" className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Career Development
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Growing toward software engineering.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {/* EDUCATION */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-xl">
                🎓
              </div>

              <h3 className="text-xl font-semibold text-white">
                Computer Programming
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Computer Programming & Analysis student at Durham College,
                currently in my fifth semester and preparing for my required
                field placement.
              </p>
            </div>

            {/* AMAZON */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-xl">
                📦
              </div>

              <h3 className="text-xl font-semibold text-white">
                Amazon Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Professional experience at Amazon has strengthened my
                understanding of operations, problem solving, accuracy,
                teamwork, safety, and working effectively in a fast-paced
                environment.
              </p>
            </div>

            {/* SOFTWARE CAREER */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-xl">
                💻
              </div>

              <h3 className="text-xl font-semibold text-white">
                Software Engineering
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Currently developing my portfolio and technical skills toward
                software developer and software engineering co-op
                opportunities.
              </p>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-16">
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

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Things I’ve built
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            A selection of projects that represent my experience with
            full-stack development, APIs, databases, authentication,
            application design, and modern frontend technologies.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div
                  className={`h-28 bg-gradient-to-r ${project.accent}`}
                />

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

        {/* WHAT I'M WORKING TOWARD */}
        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            What I’m Working Toward
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                From classroom projects to professional software development.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                My current goal is to gain professional software development
                experience through a co-op or internship while continuing to
                strengthen my skills in full-stack development, backend
                systems, cloud technologies, and software engineering.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-300">

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">
                  Full-Stack Development
                </span>
                <p className="mt-1">
                  React, Next.js, Node.js, APIs and databases
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">
                  Application Development
                </span>
                <p className="mt-1">
                  Java, C#, Android development and Unity
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">
                  Backend & Data
                </span>
                <p className="mt-1">
                  REST APIs, SQL, MongoDB, authentication and Docker
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 px-6 py-10 md:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
            Contact
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let’s connect and build something meaningful.
              </h2>

              <p className="mt-3 max-w-xl text-slate-300">
                I’m interested in connecting with developers, recruiters,
                mentors, and teams working on interesting software projects.
              </p>
            </div>

            <a
              href="mailto:harnishprajapati2906@gmail.com"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Get in touch
            </a>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Harnish Prajapati. Built with Next.js
          and Tailwind CSS.
        </footer>

      </main>
    </div>
  );
}