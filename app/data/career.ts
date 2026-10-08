export type CareerItem = {
  icon: string;
  title: string;
  description: string;
  iconStyle: string;
};

export const career = {
  label: "Career Development",

  title: "Growing toward software engineering.",

  items: [
    {
      icon: "🎓",
      title: "Computer Programming",
      description:
        "Computer Programming & Analysis student at Durham College, currently in my fifth semester and preparing for my required field placement.",
      iconStyle: "bg-violet-500/15",
    },

    {
      icon: "📦",
      title: "Amazon Experience",
      description:
        "Professional experience at Amazon has strengthened my understanding of operations, problem solving, accuracy, teamwork, safety, and working effectively in a fast-paced environment.",
      iconStyle: "bg-orange-500/15",
    },

    {
      icon: "💻",
      title: "Software Engineering",
      description:
        "Currently developing my portfolio and technical skills toward software developer and software engineering co-op opportunities.",
      iconStyle: "bg-cyan-500/15",
    },
  ] satisfies CareerItem[],
};