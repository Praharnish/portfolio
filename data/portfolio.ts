import {
  HeroItem,
  StatItem,
  AboutItem,
  GoalsItem,
  ContactItem,
} from "@/types/portfolio";


export const portfolio = {
  name: "Harnish Prajapati",

  hero: {
    label: "Computer Programming & Analysis • Aspiring Software Developer",

    title:
      "Turning ideas into applications through code, creativity, and problem-solving.",

    description:
      "I'm Harnish Prajapati, a Computer Programming & Analysis student at Durham College with a project-driven approach to software development. I build web applications, backend APIs, Android apps, and interactive projects while strengthening my skills in programming, databases, and software engineering. I'm seeking a software development co-op or field placement where I can contribute and continue growing as a developer.",
  } satisfies HeroItem,

  stats: [
    {
      label: "Current Semester",
      value: "5th",
    },
    {
      label: "Projects Built",
      value: "10+",
    },
    {
      label: "Core Languages",
      value: "7+",
    },
  ] satisfies StatItem[],


  about: {
    label: "About Me",

    title: "A developer who learns by building.",

    intro: {
      icon: "👨‍💻",
      title: "My Development Journey",
      subtitle: "Education, projects, and continuous learning",

      paragraphs: [
        "I'm pursuing the Computer Programming & Analysis advanced diploma at Durham College, where I work with object-oriented programming, web and application development, databases, REST APIs, software testing, and software design.",

        "My portfolio reflects my interest in building across different areas of software development, including full-stack web applications, backend APIs, Android applications, and Unity game development. I enjoy breaking problems into manageable parts, learning unfamiliar technologies, and improving my applications through iteration.",
      ],
    },

    cards: [
      {
        icon: "🎓",
        title: "Education",
        subtitle: "Durham College",
        description:
          "Studying Computer Programming & Analysis, developing a foundation in programming, databases, application development, and software design.",
        theme: "violet",
      },

      {
        icon: "📦",
        title: "Professional Experience",
        subtitle: "Amazon Operations",
        description:
          "Building teamwork, attention to detail, safety awareness, and practical problem-solving skills through work in a fast-paced operational environment.",
        theme: "orange",
      },
    ],

    closing: {
      icon: "🚀",
      title: "Where I'm Headed",
      description:
        "I'm seeking a software development co-op or field placement where I can contribute to a professional team, apply my programming skills, and continue developing as a software engineer.",
      theme: "cyan",
    },
  } satisfies AboutItem,


  goals: {
    label: "What I'm Working Toward",

    title: "Building the foundation for a software engineering career.",

    description:
      "My immediate goal is to gain professional software development experience through a co-op or field placement. I'm focused on writing maintainable code, developing reliable applications, strengthening my backend and database skills, and learning how software teams build, test, and deliver software.",

    areas: [
      {
        title: "Web & Full-Stack Development",
        description:
          "React, TypeScript, Next.js, responsive interfaces, backend integration, and REST APIs",
      },

      {
        title: "Application & Game Development",
        description:
          "Java, C#, Android development, Unity, application logic, and interactive user experiences",
      },

      {
        title: "Backend, Databases & Tools",
        description:
          "API design, SQL, PostgreSQL, MySQL, MongoDB, authentication, Docker, and Git",
      },
    ],
  } satisfies GoalsItem,

  contact: {
    label: "Contact",

    title: "Let's connect and build something meaningful.",

    description:
      "I'm open to connecting with software developers, recruiters, mentors, and teams offering software development co-op, internship, or field placement opportunities. I'm also happy to discuss my projects and collaborate on interesting technical ideas.",

    email: "harnishprajapati2906@gmail.com",
  } satisfies ContactItem,
};
