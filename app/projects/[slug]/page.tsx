const projects = {
  "mail-management-system": {
    title: "Mail Management System",

    description: [
      "Developed a RESTful API with five CRUD endpoints for mail-message data using PHP, Node.js, and PostgreSQL.",
      "Implemented JWT authentication and role-based access control for administrator and regular user roles using HS256 token validation.",
      "Applied test-driven development, debugging, and Docker-based development practices to improve software reliability.",
    ],

    technologies: [
      "PHP",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Docker",
      "REST API",
    ],
  },

  "interactive-recipe-book": {
    title: "Interactive Recipe Book",

    description: [
      "Developed a full-stack recipe management application using React and Node.js.",
      "Implemented authentication and user profile functionality.",
      "Integrated MongoDB and Cloudinary for data and image management.",
    ],

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
  },

  "portfolio-system": {
    title: "Portfolio System",

    description: [
      "Developed a modern personal portfolio using Next.js and TypeScript.",
      "Created responsive sections for projects, skills, and professional information.",
      "Implemented a clean dark-themed interface with reusable components.",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
          <a
            href="/#projects"
            className="text-sm text-violet-300 hover:text-violet-200"
          >
            ← Back to Projects
          </a>

          <h1 className="mt-8 text-4xl font-black text-white">
            Project Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">

        <a
          href="/#projects"
          className="text-sm text-violet-300 hover:text-violet-200"
        >
          ← Back to Projects
        </a>

        <h1 className="mt-8 text-4xl font-black text-white md:text-6xl">
          {project.title}
        </h1>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-white">
            Project Overview
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-300">
            {project.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            Technologies
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}