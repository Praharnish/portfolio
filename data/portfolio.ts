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

    title: "Growing into a software engineer who builds impactful, reliable software.",

    description:
      "My immediate goal is to gain hands-on professional experience through a software development internship or placement. I'm focused on building scalable applications, writing clean and maintainable code, strengthening my backend and database expertise, and contributing to real-world projects. I want to grow alongside experienced engineers while continuously improving how I design, develop, test, and deliver software.",

    areas: [
      {
        title: "Full-Stack & Web Engineering",
        description:
          "React, Next.js, TypeScript, JavaScript, Node.js, Express, responsive applications, RESTful APIs, and frontend-backend integration",
      },

      {
        title: "Backend & Database Engineering",
        description:
          "API development, server-side architecture, authentication, authorization, PostgreSQL, MySQL, MongoDB, SQL optimization, and data management",
      },

      {
        title: "Software Development & Engineering Practices",
        description:
          "Java, Python, C#, object-oriented programming, data structures, algorithms, debugging, automated testing, Docker, Git, and CI/CD",
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
