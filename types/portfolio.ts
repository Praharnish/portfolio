
export type HeroItem = {
  label: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type AboutCard = {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  theme: "violet" | "orange" | "cyan";
};

export type AboutItem = {
  label: string;
  title: string;
  intro: {
    icon: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  cards: AboutCard[];
  closing: {
    icon: string;
    title: string;
    description: string;
    theme: "violet" | "orange" | "cyan";
  };
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
