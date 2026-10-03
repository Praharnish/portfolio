const projects = {
  "enterprise-web-api": {
    title: "Enterprise Web API",
    category: "Enterprise Web Development",

    repository: "https://github.com/Praharnish/inft2201-webdev-enterprise",

    description: [
      "Developed a progressive enterprise web application across three assignments, starting with a PHP REST API and evolving into a secure Node.js API architecture.",
      
      "Built five RESTful CRUD endpoints for mail-message data using PHP, PostgreSQL, Docker, Composer, and PHPUnit with a test-driven development workflow.",
      
      "Implemented JWT-based authentication and role-based access control using a Node.js authentication service and PHP API, separating authentication from data services.",
      
      "Developed a security-focused Node.js API using JWT authentication, composable RBAC policies, request logging with UUID trace IDs, configurable rate limiting, and centralized error handling.",
      
      "Applied Docker and Docker Compose to containerize the development environments and used prepared SQL statements, automated testing, middleware, and structured error responses to improve reliability and security."
    ],

    technologies: [
      "PHP 8.2",
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "JWT",
      "PHPUnit",
      "Composer",
      "PSR-4",
      "REST API",
      "RBAC",
      "Express Middleware",
      "React"
    ],

    highlights: [
      "5 RESTful CRUD endpoints",
      "Test-driven development with PHPUnit",
      "JWT authentication",
      "Role-based access control",
      "Dockerized services",
      "PostgreSQL database",
      "Request logging & trace IDs",
      "API rate limiting",
      "Centralized error handling",
    ],
  },

  "interactive-recipe-book": {
    title: "Interactive Recipe Book",
    category: "Full-Stack Web & Mobile Application",

    repository: "https://gitlab.com/HPPrajapati2906/interactive-recipe-book-v2",

    description: [
      "Developed a full-stack recipe management platform that allows users to create, manage, discover, and interact with recipes.",
      "Built the frontend using React with reusable components, responsive layouts, and client-side routing.",
      "Implemented authentication using JWT and bcrypt, with protected functionality for authenticated users.",
      "Integrated MongoDB for recipe and user data and Cloudinary for recipe-image storage and management.",
      "Developed backend API routes for recipes, authentication, favorites, comments, and image uploads.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "REST API",
      "Capacitor",
      "Android",
    ],

    highlights: [
      "Full-stack React application",
      "JWT authentication",
      "MongoDB database",
      "Cloudinary image storage",
      "Recipe CRUD operations",
      "Favorites & comments",
      "Android application",
    ],
  },

  "portfolio-system": {
    title: "Developer Portfolio",
    category: "Personal Project",

    repository: "https://github.com/Praharnish/portfolio",

    description: [
      "Designed and developed a responsive developer portfolio using Next.js, React, TypeScript, and Tailwind CSS.",
      "Created reusable project, skills, career, and contact sections to present my development experience and career progression.",
      "Implemented dynamic project pages using route-based project data.",
      "Focused on responsive design, accessible navigation, reusable components, and a modern developer-focused visual style.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],

    highlights: [
      "Next.js application",
      "TypeScript",
      "Responsive UI",
      "Dynamic project pages",
      "Reusable components",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
          <a
            href="/#projects"
            className="text-sm text-violet-300 transition hover:text-violet-200"
          >
            ← Back to Projects
          </a>

          <h1 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Project Not Found
          </h1>

          <p className="mt-4 max-w-xl text-lg text-slate-400">
            The project you are looking for does not exist or may have been
            moved.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">

        {/* BACK */}
        <a
          href="/#projects"
          className="text-sm text-violet-300 transition hover:text-violet-200"
        >
          ← Back to Projects
        </a>

        {/* HEADER */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
        </header>

        {/* PROJECT OVERVIEW */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            Project Overview
          </h2>

          <ul className="mt-5 space-y-4 text-lg leading-8 text-slate-300">
            {project.description.map((item, index) => (
              <li
                key={index}
                className="relative pl-7"
              >
                <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-violet-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Key Highlights
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-3 h-2 w-10 rounded-full bg-violet-500" />

                <p className="text-sm font-medium leading-6 text-slate-200">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Technologies
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECT REPOSITORY */}
        {project.repository && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white">
              Project Repository
            </h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    View the source code
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                    Explore the source code, project structure, documentation, and
                    implementation details on the project's repository.
                  </p>
                </div>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/20 hover:text-white"
                >
                  View
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* CAREER CONNECTION */}
        <section className="mt-14 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            What This Project Demonstrates
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Practical software development experience
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            This project represents my hands-on experience applying software
            development concepts to a working application. It allowed me to
            work with APIs, databases, authentication, debugging, and
            application architecture while developing my skills toward a
            professional software development career.
          </p>
        </section>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <a
            href="/#projects"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-white/10"
          >
            ← View All Projects
          </a>
        </div>

      </div>
    </main>
  );
}