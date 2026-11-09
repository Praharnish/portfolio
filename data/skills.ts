import type { SkillsSection } from "@/types/skills";

export const skills: SkillsSection = {
  label: "Technical Skills",
  title: "Technologies I work with",
  description:
    "A collection of tools and technologies I use to build web applications, work with data, and create practical software solutions.",
  categories: [
    {
      id: "languages",
      name: "Languages",
      description: "Programming languages I use for development.",
      icon: "code",
      accentColor: "#B06AFF",
      skills: [
        { id: "java", name: "Java", icon: "java" },
        { id: "csharp", name: "C#", icon: "csharp" },
        { id: "python", name: "Python", icon: "python" },
        { id: "javascript", name: "JavaScript", icon: "javascript" },
        { id: "typescript", name: "TypeScript", icon: "typescript" },
        { id: "php", name: "PHP", icon: "php" },
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "Technologies for building user interfaces.",
      icon: "monitor",
      accentColor: "#22D3EE",
      skills: [
        { id: "react", name: "React", icon: "react" },
        { id: "nextjs", name: "Next.js", icon: "nextjs" },
        { id: "html", name: "HTML", icon: "html" },
        { id: "css", name: "CSS", icon: "css" },
        { id: "bootstrap", name: "Bootstrap", icon: "bootstrap" },
        { id: "tailwind", name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Server-side development and integrations.",
      icon: "server",
      accentColor: "#2DD4BF",
      skills: [
        { id: "nodejs", name: "Node.js", icon: "nodejs" },
        { id: "express", name: "Express.js", icon: "express" },
        { id: "rest", name: "REST APIs", icon: "rest" },
        { id: "authentication", name: "Authentication", icon: "authentication" },
        { id: "docker", name: "Docker", icon: "docker" },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      description: "Databases and data management systems.",
      icon: "database",
      accentColor: "#FBBF24",
      skills: [
        { id: "mysql", name: "MySQL", icon: "mysql" },
        { id: "postgresql", name: "PostgreSQL", icon: "postgresql" },
        { id: "sqlserver", name: "SQL Server", icon: "sqlserver" },
        { id: "mongodb", name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      id: "tools",
      name: "Development Tools",
      description: "Tools I use to build, test, and manage applications.",
      icon: "tools",
      accentColor: "#F472B6",
      skills: [
        { id: "git", name: "Git", icon: "git" },
        { id: "github", name: "GitHub", icon: "github" },
        { id: "vscode", name: "VS Code", icon: "vscode" },
        { id: "postman", name: "Postman", icon: "postman" },
        { id: "figma", name: "Figma", icon: "figma" },
        { id: "jira", name: "Jira", icon: "jira" },
      ],
    },
    {
      id: "mobile-game",
      name: "Mobile & Game Dev",
      description: "Mobile application and game development technologies.",
      icon: "mobile",
      accentColor: "#60A5FA",
      skills: [
        { id: "android", name: "Java (Android)", icon: "android" },
        { id: "flutter", name: "Flutter", icon: "flutter" },
        { id: "unity", name: "Unity", icon: "unity" },
      ],
    },
  ],
};
