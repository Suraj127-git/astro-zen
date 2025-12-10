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
      { value: "5", label: "Years Experience" },
      { value: "20%", label: "Enhancements in performance for enterprise-level applications" },
      { value: "10+", label: "Technologies" },
      { value: "4", label: "Companies" }
    ]
  },
  skills: {
    categories: [
      {
        title: "Backend Development",
        skills: ["PHP", "LARAVEL", "PYTHON", "FASTAPI", "MYSQL", "MONGODB", "REDIS", "RABBITMQ"]
      },
      {
        title: "DevOps & Cloud",
        skills: ["DOCKER", "KUBERNETES", "AWS", "HELM", "TRAEFIK", "APACHE KAFKA", "ELASTICSEARCH"]
      },
      {
        title: "Frontend Development",
        skills: ["JAVASCRIPT", "REACTJS", "NEXTJS", "ASTRO", "TYPESCRIPT", "JQUERY"]
      },
      {
        title: "AI/ML & Data Science",
        skills: ["PYTHON", "LANGCHAIN", "LANGGRAPH", "CHROMADB", "OLLAMA", "HUGGINGFACE", "OPENAI"]
      }
    ],
    details: [
      {
        name: "PHP",
        experience: "4.5 years",
        level: "Expert",
        projects: ["Sartch Product (recharge & utility payments)", "iThink Logistics Platform", "BDM Infotech Admin Panel"],
        tools: ["Laravel", "CodeIgniter", "PHPUnit", "Composer", "PSR Standards"],
        achievements: ["20% performance improvement through query optimization", "Mentored 3 junior developers", "Led backend architecture for 2 major products"]
      },
      {
        name: "LARAVEL",
        experience: "4.0 years",
        level: "Expert",
        projects: ["Sartch Product Backend", "Payment Gateway Integration", "Microservices Architecture"],
        tools: ["Eloquent ORM", "Artisan CLI", "Laravel Forge", "Laravel Horizon", "Laravel Sanctum"],
        achievements: ["Built complete backend architecture achieving 99.9% uptime", "Implemented design patterns reducing code complexity by 30%", "Integrated 5+ third-party APIs seamlessly"]
      },
      {
        name: "PYTHON",
        experience: "2.5 years",
        level: "Advanced",
        projects: ["GenAI Automation Scripts", "Data Analysis Pipelines", "LLM Integration Systems"],
        tools: ["FastAPI", "Django", "Pandas", "NumPy", "AsyncIO", "Poetry"],
        achievements: ["Built 10+ automation scripts reducing manual work by 40%", "Implemented LLM-powered solutions for 3 projects", "Created data processing pipelines handling 1M+ records"]
      },
      {
        name: "FASTAPI",
        experience: "1.5 years",
        level: "Advanced",
        projects: ["AI-Powered API Services", "Microservices Backend", "Real-time Data Processing"],
        tools: ["Pydantic", "SQLAlchemy", "Celery", "Redis", "Docker", "Uvicorn"],
        achievements: ["Built high-performance APIs with sub-100ms response times", "Implemented async processing improving throughput by 60%", "Deployed 5+ microservices in production"]
      },
      {
        name: "MYSQL",
        experience: "4.5 years",
        level: "Expert",
        projects: ["Enterprise Database Design", "High-Volume Transaction Systems", "Data Warehouse Solutions"],
        tools: ["MySQL Workbench", "Query Optimization", "Indexing Strategies", "Replication", "Stored Procedures"],
        achievements: ["Designed schemas for 10+ applications", "Optimized queries achieving 50% faster execution", "Implemented replication for 99.99% availability", "Managed databases with 10M+ records"]
      },
      {
        name: "MONGODB",
        experience: "2.0 years",
        level: "Advanced",
        projects: ["Flexible Data Models", "Real-time Analytics", "Document Storage Systems"],
        tools: ["MongoDB Compass", "Aggregation Pipeline", "Indexing", "Replication", "Atlas Cloud"],
        achievements: ["Implemented flexible schemas for 3 major projects", "Built analytics systems processing real-time data", "Achieved 40% faster development with document model"]
      },
      {
        name: "REDIS",
        experience: "3.0 years",
        level: "Advanced",
        projects: ["Caching Layer Implementation", "Session Management", "Queue Systems", "Real-time Analytics"],
        tools: ["Redis CLI", "Redis Sentinel", "Redis Cluster", "Pub/Sub", "Lua Scripts"],
        achievements: ["Implemented caching reducing database load by 70%", "Built session management for 100K+ concurrent users", "Created queue systems processing 1M+ jobs daily", "Achieved 20% overall performance improvement"]
      },
      {
        name: "RABBITMQ",
        experience: "2.5 years",
        level: "Advanced",
        projects: ["Asynchronous Task Processing", "Microservices Communication", "Event-Driven Architecture"],
        tools: ["RabbitMQ Management UI", "AMQP Protocol", "Dead Letter Queues", "Topic Exchanges", "Clustering"],
        achievements: ["Processed 500K+ messages daily without loss", "Implemented reliable message delivery with 99.9% success rate", "Built event-driven architecture for 5 microservices"]
      },
      {
        name: "DOCKER",
        experience: "3.0 years",
        level: "Advanced",
        projects: ["Containerized Microservices", "Development Environment Standardization", "CI/CD Pipeline Integration"],
        tools: ["Docker Compose", "Dockerfile", "Docker Hub", "Multi-stage Builds", "Volume Management"],
        achievements: ["Containerized 15+ applications", "Reduced deployment time by 80%", "Standardized development environments for 10+ developers", "Achieved consistent deployments across environments"]
      },
      {
        name: "KUBERNETES",
        experience: "1.5 years",
        level: "Intermediate",
        projects: ["Microservices Orchestration", "Auto-scaling Applications", "Production Deployments"],
        tools: ["kubectl", "Helm", "Kustomize", "Ingress Controllers", "Prometheus"],
        achievements: ["Orchestrated 10+ microservices in production", "Implemented auto-scaling handling 10x traffic spikes", "Achieved 99.9% uptime for containerized applications", "Reduced infrastructure costs by 30%"]
      },
      {
        name: "AWS",
        experience: "2.5 years",
        level: "Advanced",
        projects: ["Cloud Infrastructure Migration", "Serverless Applications", "Scalable Web Services"],
        tools: ["EC2", "S3", "RDS", "Lambda", "CloudFormation", "CloudWatch", "ALB"],
        achievements: ["Migrated 5+ applications to AWS cloud", "Built serverless solutions processing 1M+ requests", "Implemented infrastructure as code for 3 environments", "Reduced operational costs by 40%"]
      },
      {
        name: "HELM",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["Kubernetes Package Management", "Application Deployment Automation", "Environment Configuration"],
        tools: ["Helm Charts", "Values.yaml", "Template Functions", "Chart Repositories"],
        achievements: ["Created 8+ Helm charts for microservices", "Automated deployment process reducing time by 70%", "Standardized configuration management across environments"]
      },
      {
        name: "TRAEFIK",
        experience: "2.0 years",
        level: "Advanced",
        projects: ["Microservices Load Balancing", "Ingress Controller Setup", "SSL Termination & Routing"],
        tools: ["Docker", "Kubernetes", "Let's Encrypt", "ACME", "Middlewares", "Service Discovery"],
        achievements: ["Configured zero-downtime deployments for 10+ services", "Automated SSL certificate management saving 5 hrs/month", "Reduced latency by 25% with intelligent traffic routing"]
      },
      {
        name: "APACHE KAFKA",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["Event Streaming Platform", "Real-time Data Processing", "Log Aggregation Systems"],
        tools: ["Kafka Connect", "Kafka Streams", "Zookeeper", "Confluent Platform"],
        achievements: ["Built streaming platform processing 100K+ events per minute", "Implemented real-time analytics dashboard", "Created fault-tolerant message delivery system"]
      },
      {
        name: "ELASTICSEARCH",
        experience: "1.5 years",
        level: "Intermediate",
        projects: ["Search Engine Implementation", "Log Analysis Platform", "Real-time Analytics"],
        tools: ["Kibana", "Logstash", "Beats", "Query DSL", "Index Management"],
        achievements: ["Implemented search functionality with sub-second response", "Built log analysis system processing 1GB+ daily", "Created analytics dashboard for business insights"]
      },
      {
        name: "JAVASCRIPT",
        experience: "3.5 years",
        level: "Advanced",
        projects: ["Full-stack Web Applications", "Interactive User Interfaces", "API Integrations"],
        tools: ["ES6+", "Async/Await", "Fetch API", "DOM Manipulation", "Event Handling"],
        achievements: ["Built 15+ interactive web applications", "Implemented complex UI components", "Integrated 20+ third-party APIs", "Achieved cross-browser compatibility for all projects"]
      },
      {
        name: "REACTJS",
        experience: "2.0 years",
        level: "Advanced",
        projects: ["Admin Dashboard", "E-commerce Frontend", "Interactive Data Visualization"],
        tools: ["Hooks", "Context API", "Redux", "React Router", "Material-UI", "Styled Components"],
        achievements: ["Built responsive admin dashboard for 5K+ daily users", "Implemented state management for complex applications", "Achieved 40% faster development with component reuse", "Optimized performance reducing load time by 30%"]
      },
      {
        name: "NEXTJS",
        experience: "1.5 years",
        level: "Advanced",
        projects: ["Portfolio Website", "SEO-optimized Landing Pages", "Server-side Rendered Applications"],
        tools: ["SSR/SSG", "API Routes", "Image Optimization", "Dynamic Routing", "Vercel Deployment"],
        achievements: ["Built SEO-optimized portfolio achieving 95 Lighthouse score", "Implemented server-side rendering improving SEO by 60%", "Deployed 3 production applications with zero downtime"]
      },
      {
        name: "ASTRO",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["Personal Portfolio", "Static Website Generation", "Performance-optimized Sites"],
        tools: ["Component Islands", "Markdown", "Tailwind CSS", "Build Optimization", "Static Generation"],
        achievements: ["Built high-performance portfolio with 100 Lighthouse score", "Achieved 90% faster page loads", "Implemented component-based architecture with static benefits"]
      },
      {
        name: "TYPESCRIPT",
        experience: "1.5 years",
        level: "Advanced",
        projects: ["Type-safe Applications", "Large-scale Codebases", "API Development"],
        tools: ["Type Definitions", "Interfaces", "Generics", "Decorators", "TSConfig"],
        achievements: ["Reduced runtime errors by 50% in large applications", "Improved code maintainability for 10K+ lines projects", "Enhanced developer experience with IntelliSense support"]
      },
      {
        name: "JQUERY",
        experience: "2.0 years",
        level: "Intermediate",
        projects: ["Legacy Application Maintenance", "DOM Manipulation", "AJAX Implementations"],
        tools: ["Selectors", "Event Handling", "Animations", "AJAX", "Plugins"],
        achievements: ["Maintained 5+ legacy applications", "Migrated jQuery code to modern frameworks", "Implemented complex UI interactions"]
      },
      {
        name: "LANGCHAIN",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["LLM-powered Applications", "AI Agents", "Automated Workflows"],
        tools: ["Chains", "Agents", "Prompt Templates", "Vector Stores", "Memory Management"],
        achievements: ["Built 3 LLM-powered applications", "Created AI agents for automated customer support", "Implemented RAG systems for knowledge bases"]
      },
      {
        name: "LANGGRAPH",
        experience: "0.5 years",
        level: "Beginner",
        projects: ["Workflow Automation", "Multi-step AI Processes", "Decision Trees"],
        tools: ["Graph Construction", "Node Management", "Edge Routing", "State Management"],
        achievements: ["Built first AI workflow with 5-step decision process", "Implemented conditional routing for AI responses", "Created prototype for automated content generation"]
      },
      {
        name: "CHROMADB",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["Vector Search Implementation", "Semantic Search", "Document Retrieval"],
        tools: ["Vector Embeddings", "Similarity Search", "Collection Management", "Persistent Storage"],
        achievements: ["Implemented semantic search with 95% accuracy", "Built document retrieval system for 10K+ documents", "Created knowledge base with vector similarity"]
      },
      {
        name: "OLLAMA",
        experience: "0.5 years",
        level: "Beginner",
        projects: ["Local LLM Deployment", "Private AI Solutions", "Offline AI Applications"],
        tools: ["Model Management", "Local Inference", "GPU Optimization", "Model Fine-tuning"],
        achievements: ["Deployed 3 local LLM models", "Built private AI solutions for sensitive data", "Achieved offline AI capabilities for remote applications"]
      },
      {
        name: "HUGGINGFACE",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["Model Deployment", "Transformer Implementation", "NLP Solutions"],
        tools: ["Transformers Library", "Model Hub", "Tokenizers", "Datasets", "Inference API"],
        achievements: ["Deployed 5+ transformer models", "Built sentiment analysis with 90% accuracy", "Implemented text classification for business applications"]
      },
      {
        name: "OPENAI",
        experience: "1.0 year",
        level: "Intermediate",
        projects: ["GPT Integration", "Content Generation", "AI-powered Features"],
        tools: ["GPT-4", "Embeddings", "Function Calling", "Assistants API", "Fine-tuning"],
        achievements: ["Integrated OpenAI in 4 applications", "Built content generation system", "Implemented AI-powered customer support"]
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
        "Refactored legacy codebase to improve maintainability and performance.",
        "Working on Microservice Architecture for Scalability and Availability For Medical Product.",
        "Worked on LLM for Medical Product Email Catelog Notification System.",
        "Worked on Cline AI agent for Codebase Scanning and Code Review.",
        ],
    },
    {
      company: "Pay1",
      position: "Software Developer",
      startDate: "May 2024",
      endDate: "Oct 2025",
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
      linkPreview: "https://surajshetty.hashnode.dev",
      linkSource: "https://surajshetty.hashnode.dev",
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
      name: "AI/ML",
      summary: "30+ Projects on AI/ML",
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
      Passionate backend software engineer with a strong foundation in designing and implementing scalable and efficient server-side solutions. Specialized in creating robust APIs and database management. Committed to staying ahead in technology trends, I have a keen interest in Microservices architecture and a new curve in data analysis and data science, driving innovations towards AI-powered solutions. Eager to contribute to transformative projects and collaborate with like-minded professionals in the tech community. Let's connect and explore the possibilities of creating impactful solutions together!

      #BackendDevelopment #Microservices #GenerativeAI #TechInnovation
    `,
  },
};
