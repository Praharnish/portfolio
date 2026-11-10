export type SkillCategoryIcon =
  | "code"
  | "monitor"
  | "server"
  | "database"
  | "tools"
  | "mobile";

export type SkillItem = {
  id: string;
  name: string;
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
