import { CareerItem } from "@/types/career";


export const career = {
  label: "Career Development",
  title: "Building toward software engineering.",
  items: [
    {
      icon: "🎓",
      title: "Computer Programming & Analysis",
      description:
        "Fifth-semester student at Durham College developing skills in object-oriented programming, full-stack development, databases, REST APIs, and software design. Preparing for the program's required field placement.",
      iconStyle: "bg-violet-500/15",
    },
    {
      icon: "📦",
      title: "Professional Experience",
      description:
        "Amazon operations experience involving high-volume workflows, RF scanning, dock operations, and safety procedures. Developed practical problem-solving, teamwork, accuracy, and process-improvement skills in a fast-paced environment.",
      iconStyle: "bg-orange-500/15",
    },
    {
      icon: "💻",
      title: "Software Development Goals",
      description:
        "Building web applications, backend APIs, and mobile projects while strengthening skills in Java, C#, Python, TypeScript, React, SQL, and software testing. Seeking a software development co-op or field placement to apply these skills in a professional team.",
      iconStyle: "bg-cyan-500/15",
    },
  ] satisfies CareerItem[],
};
