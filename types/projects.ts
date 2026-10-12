export type Project = {
  slug: string;
  title: string;
  category: string;
  date: string | null;
  website: string | null;
  repository: string | null;
  image: string | null;
  accent: string;
  summary: string;
  description: string[];
  technologies: string[];
  highlights: string[];


  careerConnection: {
    title: string;
    description: string;
  };
};