export type SkillIconKey =
  | "java"
  | "csharp"
  | "python"
  | "javascript"
  | "typescript"
  | "php"
  | "react"
  | "nextjs"
  | "html"
  | "css"
  | "bootstrap"
  | "tailwind"
  | "nodejs"
  | "express"
  | "rest"
  | "authentication"
  | "docker"
  | "mysql"
  | "postgresql"
  | "sqlserver"
  | "mongodb"
  | "git"
  | "github"
  | "vscode"
  | "postman"
  | "figma"
  | "jira"
  | "android"
  | "flutter"
  | "unity";

export type SkillCategoryIcon = "code" | "monitor" | "server" | "database" | "tools" | "mobile";

export type SkillItem = {
  id: string;
  name: string;
  /** Key used to select the icon in Skills.tsx. */
  icon: SkillIconKey;
};

export type SkillCategory = {
  id: string;
  name: string;
  description: string;
  icon: SkillCategoryIcon;
  accentColor: string;
  skills: SkillItem[];
};

export type SkillsSection = {
  label: string;
  title: string;
  description: string;
  categories: SkillCategory[];
};
