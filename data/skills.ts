import type { SkillsSection } from "@/types/skills";

export const skills: SkillsSection = {
  label: "Technical Expertise",

  title: "Technologies & Tools I Work With",

  description:
    "A collection of programming languages, frameworks, databases, and development tools I've worked with through academic coursework and personal projects.",

  categories: [
    {
      id: "languages",
      name: "Programming Languages",
      description:
        "Languages used to build applications and solve programming problems.",
      icon: "code",
      accentColor: "#A78BFA",
      skills: [
        { id: "java", name: "Java" },
        { id: "python", name: "Python" },
        { id: "typescript", name: "TypeScript" },
        { id: "javascript", name: "JavaScript" },
        { id: "csharp", name: "C#" },
        { id: "php", name: "PHP" },
        { id: "sql", name: "SQL" },
      ],
    },

    {
      id: "frontend",
      name: "Frontend Development",
      description:
        "Building responsive interfaces and interactive web experiences.",
      icon: "monitor",
      accentColor: "#38BDF8",
      skills: [
        { id: "reactjs", name: "React.js" },
        { id: "nextjs", name: "Next.js" },
        { id: "tailwind", name: "Tailwind CSS" },
        { id: "bootstrap", name: "Bootstrap" },
        { id: "vite", name: "Vite" },
      ],
    },

    {
      id: "backend",
      name: "Backend Development",
      description:
        "Developing server-side applications, APIs, and application logic.",
      icon: "server",
      accentColor: "#34D399",
      skills: [
        { id: "nodejs", name: "Node.js" },
        { id: "express", name: "Express.js" },
        { id: "restapi", name: "REST APIs" },
        { id: "jwt", name: "JWT Authentication" },
        { id: "rbac", name: "Role-Based Access Control" },
      ],
    },

    {
      id: "databases",
      name: "Databases",
      description:
        "Working with relational and NoSQL databases for application data.",
      icon: "database",
      accentColor: "#FBBF24",
      skills: [
        { id: "postgresql", name: "PostgreSQL" },
        { id: "mysql", name: "MySQL" },
        { id: "mongodb", name: "MongoDB" },
        { id: "sqlserver", name: "SQL Server" },
      ],
    },

    {
      id: "mobile",
      name: "Mobile & Application Development",
      description:
        "Developing mobile applications and interactive application experiences.",
      icon: "mobile",
      accentColor: "#F472B6",
      skills: [
        { id: "flutter", name: "Flutter" },
        { id: " dart", name: "Dart" },
        { id: "kotlin", name: "Kotlin" },
        { id: "reactnative", name: "React Native" },
        { id: "unity", name: "Unity" },
      ],
    },

    {
      id: "tools",
      name: "Tools & Development Practices",
      description:
        "Tools and workflows supporting development, testing, and deployment.",
      icon: "tools",
      accentColor: "#FB923C",
      skills: [
        { id: "git", name: "Git" },
        { id: "github", name: "GitHub" },
        { id: "jira", name: "Jira" },
        { id: "docker", name: "Docker" },
        { id: "cicd", name: "CI/CD" },
        { id: "testing", name: "Automated Testing" },
        { id: "cloudinary", name: "Cloudinary" },
        { id: "aws", name: "AWS" },
      ],
    },
  ],
};
