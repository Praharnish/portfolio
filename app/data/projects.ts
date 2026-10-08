export type Project = {
  slug: string;
  title: string;
  category: string;
  repository: string | null;
  image: string | null;
  accent: string;
  summary: string;
  description: string[];
  technologies: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-web-api",
    title: "Enterprise Web API",
    category: "Enterprise Web Development",

    repository:
      "https://github.com/Praharnish/inft2201-webdev-enterprise",

    image: null,
    accent: "from-violet-500 to-fuchsia-500",

    summary: "A full-stack recipe management application built with React, Node.js, MongoDB, and REST APIs. Features secure authentication, role-based access control, recipe management, live search, filtering, sorting, pagination, image uploads, and form validation. Deployed with Vercel serverless functions, MongoDB, and Cloudinary.",

    description: [
      "Developed a progressive enterprise web application across three assignments, starting with a PHP REST API and evolving into a secure Node.js API architecture.",

      "Built five RESTful CRUD endpoints for mail-message data using PHP, PostgreSQL, Docker, Composer, and PHPUnit with a test-driven development workflow.",

      "Implemented JWT-based authentication and role-based access control using a Node.js authentication service and PHP API, separating authentication from data services.",

      "Developed a security-focused Node.js API using JWT authentication, composable RBAC policies, request logging with UUID trace IDs, configurable rate limiting, and centralized error handling.",

      "Applied Docker and Docker Compose to containerize the development environments and used prepared SQL statements, automated testing, middleware, and structured error responses to improve reliability and security.",
    ],

    technologies: [
      "PHP 8.2",
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "JWT",
      "PHPUnit",
      "Composer",
      "PSR-4",
      "REST API",
      "RBAC",
      "Express Middleware",
      "React",
    ],

    highlights: [
      "5 RESTful CRUD endpoints",
      "Test-driven development with PHPUnit",
      "JWT authentication",
      "Role-based access control",
      "Dockerized services",
      "PostgreSQL database",
      "Request logging & trace IDs",
      "API rate limiting",
      "Centralized error handling",
    ],
  },

  {
    slug: "interactive-recipe-book-v2",
    title: "Interactive Recipe Book V2",
    category: "Full-Stack Web Application",

    repository:
      "https://gitlab.com/HPPrajapati2906/interactive-recipe-book-v2",

    image: "/projects/interactive-recipe-book-v2.jpg",
    accent: "from-cyan-500 to-blue-500",

    summary: "A full-stack recipe management application built with React, Node.js, MongoDB, and REST APIs. Features secure authentication, role-based access control, recipe management, live search, filtering, sorting, pagination, image uploads, and form validation. Deployed with Vercel serverless functions, MongoDB, and Cloudinary.",

    description: [
      "Developed a full-stack React application with Node.js serverless APIs and MongoDB, providing dynamic recipe management and data-driven functionality.",

      "Implemented secure authentication using JWT, bcrypt, and Google Sign-In, with role-based access control for protected application features.",

      "Built reusable React components and interactive functionality including live search, category filtering, sorting, pagination, and form validation.",

      "Integrated Cloudinary for recipe image management and connected the application to MongoDB for persistent recipe data.",

      "Implemented API communication between the React frontend and backend services, handling authentication, data retrieval, and recipe operations.",

      "Troubleshot and resolved API, authentication, CORS, environment-variable, and deployment issues through systematic debugging and testing.",

      "Deployed the application using Vercel serverless functions and MongoDB, applying software development practices from development through deployment.",
    ],

    technologies: [
      "React 19",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Google OAuth",
      "Cloudinary",
      "Bootstrap",
      "React Router",
      "Vite",
      "Vercel",
    ],

    highlights: [
      "Full-stack React application",
      "JWT authentication",
      "MongoDB database",
      "Cloudinary image storage",
      "Recipe CRUD operations",
      "Favorites & comments",
      "Live search & filtering",
      "Sorting & pagination",
      "Form validation",
      "Vercel deployment",
    ],
  },

  {
    slug: "my-portfolio",
    title: "My Portfolio",
    category: "Personal Project",

    repository: "https://github.com/Praharnish/portfolio",

    image: null,
    accent: "from-amber-500 to-orange-500",

    summary: "A responsive developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Features a modern design, dynamic project pages, and a clean visual style.",

    description: [
      "Designed and developed a responsive developer portfolio using Next.js, React, TypeScript, and Tailwind CSS.",

      "Created reusable project, skills, career, and contact sections to present my development experience and career progression.",

      "Implemented dynamic project pages using route-based project data.",

      "Focused on responsive design, accessible navigation, reusable components, and a modern developer-focused visual style.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],

    highlights: [
      "Next.js application",
      "TypeScript",
      "Responsive UI",
      "Dynamic project pages",
      "Reusable components",
    ],
  },

  {
    slug: "super-mario-bros",
    title: "Super Mario Bros",
    category: "Object-Oriented Programming",

    repository: null,

    image: "/projects/super-mario-bros.jpg",
    accent: "from-red-500 to-orange-500",

    summary: "A 2D Super Mario Bros-inspired platformer developed in C# and Unity. Features object-oriented programming principles, reusable gameplay systems, player and enemy mechanics, power-ups, collectibles, level transitions, animations, audio management, scoring, lives, and a persistent JSON-based leaderboard.",

    description: [
      "Developed a 2D Super Mario Bros-inspired platformer in C# and Unity as a three-person team project, applying object-oriented programming principles to create reusable and maintainable gameplay systems.",

      "Designed an extensible class hierarchy using abstraction, inheritance, polymorphism, and encapsulation for players, enemies, and collectibles.",

      "Implemented player movement, jumping, physics, power-ups, enemy interactions, warp pipes, level transitions, animations, audio management, scoring, lives, and game-state management.",

      "Built a persistent JSON-based leaderboard system that stores player scores and coins across sessions, with dynamically generated UI entries for leaderboard rankings.",

      "Used Unity's New Input System, coroutines, collision detection, custom physics utilities, and scene management to create responsive gameplay and smooth level transitions.",
    ],

    technologies: [
      "C#",
      "Unity",
      "Unity 2D",
      "Object-Oriented Programming",
      "New Input System",
      "JSON",
      "Git",
      "GitHub",
    ],

    highlights: [
      "2D platformer gameplay",
      "Object-oriented class hierarchy",
      "Abstraction, inheritance & polymorphism",
      "Player and enemy systems",
      "Power-ups and collectibles",
      "Physics and collision detection",
      "Level transitions",
      "Persistent JSON leaderboard",
      "Dynamic UI generation",
      "Team-based development",
    ],
  },
];