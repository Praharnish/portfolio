const projects = {
  "mail-management-system": {
    title: "Mail Management System",
    category: "Full-Stack Application",

    description: [
      "Developed a full-stack mail-management application with RESTful API endpoints for creating, retrieving, updating, and deleting mail-message data.",
      "Implemented JWT-based authentication and role-based access control to separate administrator and regular-user functionality.",
      "Worked with PHP, Node.js, and PostgreSQL while using Docker to create a consistent development environment.",
      "Applied software testing, debugging, and API troubleshooting practices to identify and resolve application issues.",
    ],

    technologies: [
      "PHP",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Docker",
      "REST API",
    ],

    highlights: [
      "5+ REST API endpoints",
      "JWT authentication",
      "Role-based access control",
      "PostgreSQL database",
      "Docker development environment",
    ],
  },

  "interactive-recipe-book": {
    title: "Interactive Recipe Book",
    category: "Full-Stack Web & Mobile Application",

    description: [
      "Developed a full-stack recipe management platform that allows users to create, manage, discover, and interact with recipes.",
      "Built the frontend using React with reusable components, responsive layouts, and client-side routing.",
      "Implemented authentication using JWT and bcrypt, with protected functionality for authenticated users.",
      "Integrated MongoDB for recipe and user data and Cloudinary for recipe-image storage and management.",
      "Developed backend API routes for recipes, authentication, favorites, comments, and image uploads.",
      "Extended the application to Android using Capacitor and prepared the application for Google Play closed testing.",
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