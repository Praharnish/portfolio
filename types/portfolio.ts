export type HeroItem = {
  label: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type AboutItem = {
  label: string;
  title: string;
  paragraphs: string[];
};

export type GoalsItem = {
  label: string;
  title: string;
  description: string;
  areas: {
    title: string;
    description: string;
  }[];
};

export type ContactItem = {
  label: string;
  title: string;
  description: string;
  email: string;
};