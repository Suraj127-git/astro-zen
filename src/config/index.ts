import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Suraj Shetty — Software Developer",
  author: "Suraj Shetty",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Blog", href: "#blog" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Suraj Shetty",
    specialty: "Backend Software Engineer",
    tagline: "Building scalable, high-performance systems that power modern applications",
    summary:
      "Specialized in architecting backend solutions with Laravel, PHP, and microservices. Proven track record of optimizing system performance by 20%+ and delivering enterprise-grade applications. Currently exploring GenAI/LLMs and expanding into full-stack capabilities with React and modern DevOps practices.",
    email: "shetty44444@gmail.com",
    availability: {
      status: "available",
      text: "Open to new opportunities"
    },
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "20%", label: "Performance Gains" },
      { value: "10+", label: "Technologies" },
      { value: "3", label: "Companies" }
    ]
  },
  skills: {
    row1: ["LARAVEL", "PHP", "PYTHON", "JAVASCRIPT", "REACTJS", "NODEJS", "TYPESCRIPT"],
    row2: ["RABBITMQ", "REDIS", "DOCKER", "KUBERNETES", "AWS", "MONGODB", "MYSQL"]
  },
  experience: [
        {
      company: "WebMD",
      position: "Software Engineer",
      startDate: "Oct 2025",
      endDate: "Present",
      summary: [
        "Maintain Legacy Codebase",
        "Led product development and ensured smooth integration of new features and requirements.",
            ],
    },
    {
      company: "Pay1",
      position: "Software Developer",
      startDate: "May 2024",
      endDate: "Present",
      summary: [
        "Worked on Sartch Product Created Whole Backend Architecture for recharge and utility & Bill Payment.",
        "Led product development and ensured smooth integration of new features and requirements.",
        "Optimize load time by 20% using query optimization and cache management and implemented Design Patterns optimize code and maintainability.",
        "Worked on Linux Server and Redis Queue for better performance and Razerpay Payment Gateway Integration.",
      ],
    },
    {
      company: "BDM INFOTECH",
      position: "Software Developer",
      startDate: "Jan 2024",
      endDate: "Feb 2024",
      summary: [
        "Worked on SAAS Application And Built A Admin Panel.",
        "Started Working on Github Action and Docker and Reactjs.",
      ],
    },
    {
      company: " iThink Logistics ",
      position: "Software Developer",
      startDate: "Jun 2021",
      endDate: "Dec 2023",
      summary: [
        "Designed and developed backend applications using PHP.",
        "Worked with front-end developers to integrate API endpoints and database queries into web applications by using Mysql for database and query and optimized queries for performance",
        "Worked on Microservices for example Docker, RabbitMQ, Apache Kafka, Redis, Elasticsearch etc.",
        "Implemented RabbitMQ and Redis for Queue management and Locking mechanism in php.",
      ],
    },
  ],
  blog: [
    {
      name: "Hashnode Blog",
      summary: "A blog platform where you can express yourself and connect with others Devs.",
      linkPreview: "https://hashnode.surajshetty.blog",
      linkSource: "https://hashnode.surajshetty.blog/",
      image: "/hashnode-1.webp",
    }, 
    {
      name: "Medium Blog",
      summary: "Personal blog where I write about things I find interesting in development.",
      linkPreview: "https://medium.com/@shetty44444",
      linkSource: "https://medium.com/@shetty44444",
      image: "/medium-1.webp",
    },
  ],
  projects: [
    {
      name: "Shopify Clone",
      summary: "A full-featured e-commerce platform built with modern web technologies.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: "/shopify-clon.png",
    },
    {
      name: "Instagram Clone",
      summary: "A social media application with real-time features and image sharing.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: "/clone-ig.png",
    },
    {
      name: "Spotify Clone",
      summary: "A music streaming platform with playlist management and audio playback.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: "/spotifu.png",
    }
  ],
  about: {
    description: `
      Passionate backend developer with a strong foundation in designing and implementing scalable and efficient server-side solutions. Specialized in creating robust APIs and database management. Committed to staying ahead in technology trends, I have a keen interest in Microservices architecture and a new curve in data analysis and data science, driving innovations towards AI-powered solutions. Eager to contribute to transformative projects and collaborate with like-minded professionals in the tech community. Let's connect and explore the possibilities of creating impactful solutions together!

      #BackendDevelopment #Microservices #DataScience #AI #TechInnovation
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
