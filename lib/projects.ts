import { Project } from "@/app/components/ProjectCard";

// Sample projects data - replace with your actual projects
export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    overview: "Built a scalable e-commerce platform featuring user authentication, product catalog, shopping cart, and order management. Implemented responsive design and optimized performance.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    date: "2024-01-15",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    overview: "Developed a modern task management tool with drag-and-drop interface, real-time notifications, and team workspaces. Focused on user experience and performance.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-app-demo.com",
    date: "2024-02-20"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive data visualization.",
    overview: "Created a weather application with geolocation support, 7-day forecasts, and interactive charts. Integrated multiple weather APIs for accurate data.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    date: "2023-11-10"
  },
  {
    id: "4",
    title: "Blog CMS",
    description: "A headless CMS for bloggers with markdown support and SEO optimization.",
    overview: "Built a content management system specifically designed for bloggers. Features include markdown editing, SEO optimization, and analytics integration.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/blog-cms",
    liveUrl: "https://your-blog-cms-demo.com",
    date: "2024-03-05",
    featured: true
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "A modern portfolio website with 3D animations and interactive elements.",
    overview: "Designed and developed a personal portfolio website featuring 3D graphics, smooth animations, and responsive design. Showcased projects and skills effectively.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["React", "Three.js", "Framer Motion", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio-demo.com",
    date: "2023-12-15"
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard with customizable widgets and data visualization.",
    overview: "Developed a comprehensive analytics platform with real-time data processing, customizable dashboards, and advanced charting capabilities.",
    image: "/api/placeholder/400/300",
    imageUrl: "/api/placeholder/800/600",
    technologies: ["Angular", "D3.js", "WebSocket", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    date: "2024-04-01"
  }
];

// Function to get all unique technologies
export const getAllTechnologies = (projects: Project[]): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

// Function to filter projects by technology
export const filterProjectsByTechnology = (projects: Project[], technology: string): Project[] => {
  if (technology === "all") return projects;
  return projects.filter(project => project.technologies.includes(technology));
};

// Function to get featured projects
export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};

// Function to sort projects by date (newest first)
export const sortProjectsByDate = (projects: Project[]): Project[] => {
  return [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Function to get projects count by technology
export const getProjectsCountByTechnology = (projects: Project[]): Record<string, number> => {
  const counts: Record<string, number> = {};
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      counts[tech] = (counts[tech] || 0) + 1;
    });
  });
  return counts;
};