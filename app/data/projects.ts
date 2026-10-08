export type Project = {
  slug: string;
  title: string;
  category: string;
  date: string | null;
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

export const projects: Project[] = [

  // My Portfolio
  {
    slug: "my-portfolio",
    title: "My Portfolio",
    category: "Personal Project",
    date: "Oct 2026 - Present",

    repository: "https://github.com/Praharnish/portfolio",

    image: "/projects/my-portfolio.jpg",
    accent: "from-amber-500 to-orange-500",

    summary: "A responsive developer portfolio that showcases my background, technical skills, career goals, and software projects through a modern Next.js experience.",

    description: [
      "Designed and developed a responsive portfolio with Next.js, React, TypeScript, and Tailwind CSS to present my software development journey.",

      "Created focused sections for my introduction, experience, skills, career goals, featured projects, and contact information.",

      "Implemented reusable project cards and dynamic project detail pages powered by centralized route-based project data.",

      "Focused on responsive layouts, accessible navigation, reusable components, clear content structure, and a polished developer-focused visual style.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    
    highlights: [
      "Responsive portfolio website",
      "App Router project pages",
      "Centralized project data",
      "Responsive UI",
      "Reusable components",
      "Accessible navigation",
    ],

    careerConnection: {
      title: "Modern frontend development",
      description: "This project demonstrates my ability to build and structure a modern frontend application with a focus on maintainability, reusable components, responsive design, and clear user experience. I designed the portfolio around centralized project data and dynamic routing so new projects can be added without duplicating page layouts, while applying Next.js, React, TypeScript, and Tailwind CSS to create a consistent and scalable interface.",
    },
  },
  
  // Interactive Recipe Book V2
  {
    slug: "interactive-recipe-book-v2",
    title: "Interactive Recipe Book V2",
    category: "Full-Stack Web Application",
    date: "Jun 2026 - Present",

    repository:
      "https://gitlab.com/HPPrajapati2906/interactive-recipe-book-v2",

    image: "/projects/interactive-recipe-book-v2.jpg",
    accent: "from-cyan-500 to-blue-500",

    summary: "A full-stack web platform for discovering, saving, sharing, and discussing recipes.",

    description: [
      "Interactive Recipe Book helps users find and organize recipes through a simple, community-focused experience.",
      
      "Users can browse, search, filter, and sort recipes, view detailed cooking instructions, save favorites, publish recipes, and participate in discussions.",
      
      "The platform includes secure authentication, Google sign-in, protected user features, MongoDB APIs, and Cloudinary image uploads. The Android app is currently under development.",
    ],

    technologies: [
    "React",
    "Vite",
    "React Router",
    "Bootstrap",
    "Node.js",
    "MongoDB",
    "JWT",
    "Google OAuth",
    "Cloudinary",
    ],

    highlights: [
      "Search, filter, sort, and paginate recipes",
      "View ingredients and cooking instructions",
      "Create and publish personal recipes",
      "Save favorite recipes",
      "Upload recipe images",
      "Email and Google authentication",
      "Protected user features",
      "Community comments",
      "Responsive web design",
      "Android app under development",
    ],

    careerConnection: {
      title: "Full-stack application development",
      description: "This project demonstrates my ability to develop user-facing functionality across the frontend, backend, database, authentication, and deployment layers of an application. I implemented features such as recipe management, search and filtering, favorites, comments, protected user functionality, multiple authentication methods, image uploads, and persistent data storage, giving me practical experience connecting independent application services into a complete product.",
    },
  },

  // Enterprise Web API
  {
    slug: "enterprise-web-api-suite",
    title: "Enterprise Web API Suite",
    category: "Backend Development",
    date: "Jan 2026 - Apr 2026",

    repository:
      "https://github.com/Praharnish/inft2201-webdev-enterprise",

    image: null,
    accent: "from-violet-500 to-fuchsia-500",

    summary: "A secure backend API project demonstrating RESTful services, JWT authentication, role-based access control, automated testing, and Docker-based development.",

    description: [
      "Developed a PHP REST API for managing mail records with complete create, read, update, and delete functionality.",

      "Implemented PHPUnit tests, PostgreSQL database integration, prepared statements, JSON responses, and RESTful HTTP status codes.",

      "Built a multi-service authentication system using Node.js, PHP, JWT, PostgreSQL, and Docker.",

      "Added role-based access control to provide different permissions for administrators and regular users.",

      "Developed a secure Node.js API with JWT verification, authorization policies, request logging, UUID trace IDs, rate limiting, and centralized error handling.",
    ],

    technologies: [
      "Node.js",
      "JavaScript",
      "PHP",
      "PostgreSQL",
      "Express",
      "JWT",
      "Docker",
      "Docker Compose",
      "PHPUnit",
      "Composer",
    ],

    highlights: [
      "RESTful mail API",
      "Full CRUD operations",
      "JWT authentication",
      "Role-based access control",
      "Admin and user permissions",
      "PHPUnit testing",
      "PostgreSQL integration",
      "Prepared SQL statements",
      "Request logging",
      "UUID trace IDs",
      "API rate limiting",
      "Centralized error handling",
      "Dockerized services",
    ],

    careerConnection: {
      title: "Secure enterprise API development",
      description: "This project demonstrates my ability to design backend services with an emphasis on security, reliability, testing, and controlled access to application data. I worked with RESTful API design, CRUD operations, JWT authentication, role-based authorization, prepared database queries, automated testing, request tracing, rate limiting, and centralized error handling while integrating PHP and Node.js services through a Docker-based development environment.",
    },
  },


  // Super Mario Bros
  {
    slug: "super-mario-bros",
    title: "Super Mario Bros",
    category: "Game Development",
    date: "Jan 2026 - Apr 2026",

    repository: null,

    image: "/projects/super-mario-bros.jpg",
    accent: "from-red-500 to-orange-500",

    summary: "A 2D platformer remake built in Unity that recreates the classic Super Mario Bros. experience while demonstrating core object-oriented programming principles.",

    description: [
      "Developed a 2D Super Mario Bros. remake as a collaborative final project for an Object-Oriented Programming course at Durham College.",
      
      "Implemented side-scrolling gameplay with physics-based movement, jumping, enemy interactions, collectibles, power-ups, warp pipes, underground areas, and level-completion sequences.",
      
      "Applied abstraction, encapsulation, inheritance, and polymorphism to create reusable and maintainable gameplay systems.",
      
      "Designed a shared player hierarchy supporting different character forms, including Mario and Super Mario, with separate movement, animation, collision, and power-up behavior.",
      
      "Created specialized enemy classes for Goombas and Koopa Troopas, including movement, collision responses, shell mechanics, and defeat states.",
      
      "Implemented collectible systems for coins, mushrooms, and Starman power-ups that affect the player, score, abilities, and game progression.",
      
      "Built interactive level elements including mystery blocks, breakable bricks, solid blocks, warp pipes, flagpoles, and castles.",
      
      "Developed centralized systems for managing the score, coins, lives, player state, level progression, game-over conditions, and level restarts.",
      
      "Added animated characters, enemy animations, scene transitions, background music, sound effects, menus, game-over screens, and leaderboard functionality.",
      
      "Used Unity's Input System, 2D physics, tilemaps, animation controllers, Unity UI, and scene management tools to create a complete playable application."
    ],

    technologies: [
      "Unity",
      "C#",
      "2D Physics",
      "Universal Render Pipeline",
      "Tilemaps",
      "Unity Input System",
      "Animation Controllers"
    ],

    highlights: [
      "Physics-based player movement",
      "Mario and Super Mario states",
      "Reusable OOP class hierarchy",
      "Goomba and Koopa behaviors",
      "Coins and power-ups",
      "Interactive mystery blocks",
      "Warp pipes and underground levels",
      "Flagpole level completion",
      "Score and life management",
      "Leaderboard system",
      "Animated characters and enemies",
      "Scene transitions and audio"
    ],

    careerConnection: {
      title: "Object-oriented game development",
      description: "This project demonstrates my ability to apply object-oriented design to a complex interactive application while working as part of a development team. I designed reusable class hierarchies and gameplay systems using abstraction, encapsulation, inheritance, and polymorphism, while coordinating player states, enemies, collectibles, physics, level progression, UI, audio, and persistent game data into a cohesive application.",
    },
  },
];