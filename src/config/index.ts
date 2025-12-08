import type { SiteConfig, SiteContent } from "../types";
import alejandroSmall from "../assets/alejandro-small.jpg";
import hashnode from "../assets/hashnode-1.webp";
import medium from "../assets/medium-1.webp";
import shopify from "../assets/shopify-clon.png";
import cloneIg from "../assets/clone-ig.png";
import spotifu from "../assets/spotifu.png";

export const SITE_CONFIG: SiteConfig = {
  title: "Suraj Shetty — Software Developer",
  author: "Suraj Shetty",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: alejandroSmall,
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
    categories: [
      {
        title: "DevOps & Cloud",
        skills: ["AWS", "DOCKER", "KUBERNETES", "RABBITMQ", "REDIS"]
      },
      {
        title: "Backend Development",
        skills: ["LARAVEL", "PHP", "NODEJS", "PYTHON", "MYSQL", "MONGODB"]
      },
      {
        title: "Frontend Development",
        skills: ["REACTJS", "JAVASCRIPT", "TYPESCRIPT", "ASTRO"]
      },
      {
        title: "Generative AI",
        skills: ["LANGCHAIN", "OPENAI", "HUGGINGFACE"]
      }
    ],
    details: [
      {
        name: "LARAVEL",
        description: "Professional PHP framework for building robust web applications with elegant syntax and powerful features.",
        experience: "Built complete backend architecture for Sartch Product (recharge and utility payments) at Pay1. Implemented design patterns for code optimization and maintainability, achieving 20% load time improvement.",
        level: 95
      },
      {
        name: "PHP",
        description: "Server-side scripting language used for building dynamic web applications and RESTful APIs.",
        experience: "4+ years of professional experience designing and developing backend applications. Worked with Laravel framework to create scalable server-side solutions.",
        level: 90
      },
      {
        name: "PYTHON",
        description: "Versatile programming language used for backend development, data analysis, and automation.",
        experience: "Exploring GenAI and LLMs using Python. Building automation scripts and working on data analysis projects to expand capabilities in AI-powered solutions.",
        level: 85
      },
      {
        name: "JAVASCRIPT",
        description: "Core language for web development, enabling dynamic and interactive user experiences.",
        experience: "Used extensively for front-end integration and working with modern frameworks. Currently enhancing skills with ReactJS and Astro.js.",
        level: 88
      },
      {
        name: "REACTJS",
        description: "Popular JavaScript library for building user interfaces with component-based architecture.",
        experience: "Actively learning and implementing React for front-end development. Started working with ReactJS at BDM INFOTECH for building admin panels.",
        level: 80
      },
      {
        name: "NODEJS",
        description: "JavaScript runtime for building scalable server-side applications and APIs.",
        experience: "Implemented Node.js for backend services and API development. Experience with building microservices and real-time applications.",
        level: 85
      },
      {
        name: "TYPESCRIPT",
        description: "Typed superset of JavaScript that adds static typing for more robust code.",
        experience: "Currently enhancing skills in TypeScript for building type-safe applications. Using it with React and Astro.js.",
        level: 82
      },
      {
        name: "RABBITMQ",
        description: "Message broker for handling asynchronous communication between microservices.",
        experience: "Implemented RabbitMQ for queue management and asynchronous task processing at iThink Logistics.",
        level: 85
      },
      {
        name: "REDIS",
        description: "In-memory data structure store used for caching, session management, and real-time analytics.",
        experience: "Implemented Redis for queue management, locking mechanisms, and caching. Achieved 20% performance improvement.",
        level: 88
      },
      {
        name: "DOCKER",
        description: "Containerization platform for building, shipping, and running applications in isolated environments.",
        experience: "Started working with Docker at BDM INFOTECH. Implemented Docker for microservices architecture and development environment consistency.",
        level: 85
      },
      {
        name: "KUBERNETES",
        description: "Container orchestration platform for automating deployment, scaling, and management of applications.",
        experience: "Working on Kubernetes for orchestrating containerized applications and managing microservices at scale.",
        level: 75
      },
      {
        name: "AWS",
        description: "Cloud computing platform offering scalable infrastructure and services for application deployment.",
        experience: "Experience deploying and managing applications on AWS. Working on cloud infrastructure and exploring various AWS services.",
        level: 80
      },
      {
        name: "MONGODB",
        description: "NoSQL database for storing and managing unstructured data with flexible schema design.",
        experience: "Used MongoDB for projects requiring flexible data models and scalable document storage.",
        level: 82
      },
      {
        name: "MYSQL",
        description: "Relational database management system for structured data storage and complex queries.",
        experience: "Extensive experience with MySQL at iThink Logistics and Pay1. Designed database schemas, wrote optimized queries.",
        level: 92
      },
      {
        name: "ASTRO",
        description: "Web framework for building content-driven websites like blogs, marketing, and e-commerce.",
        experience: "Built this portfolio using Astro to ensure high performance and SEO optimization.",
        level: 85
      },
      {
        name: "LANGCHAIN",
        description: "Framework for developing applications powered by language models.",
        experience: "Building LLM-powered applications and agents for automated workflows.",
        level: 70
      },
      {
        name: "OPENAI",
        description: "API for accessing powerful AI models like GPT-4 for natural language processing.",
        experience: "Integrated OpenAI API for text generation and analysis in various projects.",
        level: 75
      },
      {
        name: "HUGGINGFACE",
        description: "Platform for sharing and collaborating on machine learning models and datasets.",
        experience: "Utilizing Hugging Face transformers for local model deployment and fine-tuning.",
        level: 70
      }
    ]
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
      image: hashnode,
    }, 
    {
      name: "Medium Blog",
      summary: "Personal blog where I write about things I find interesting in development.",
      linkPreview: "https://medium.com/@shetty44444",
      linkSource: "https://medium.com/@shetty44444",
      image: medium,
    },
  ],
  projects: [
    {
      name: "Shopify Clone",
      summary: "A full-featured e-commerce platform built with modern web technologies.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: shopify,
    },
    {
      name: "Instagram Clone",
      summary: "A social media application with real-time features and image sharing.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: cloneIg,
    },
    {
      name: "Spotify Clone",
      summary: "A music streaming platform with playlist management and audio playback.",
      linkPreview: "https://github.com/surajshetty",
      linkSource: "https://github.com/surajshetty",
      image: spotifu,
    }
  ],
  about: {
    description: `
      Passionate backend developer with a strong foundation in designing and implementing scalable and efficient server-side solutions. Specialized in creating robust APIs and database management. Committed to staying ahead in technology trends, I have a keen interest in Microservices architecture and a new curve in data analysis and data science, driving innovations towards AI-powered solutions. Eager to contribute to transformative projects and collaborate with like-minded professionals in the tech community. Let's connect and explore the possibilities of creating impactful solutions together!

      #BackendDevelopment #Microservices #DataScience #AI #TechInnovation
    `,
  },
};

// #5755ff
