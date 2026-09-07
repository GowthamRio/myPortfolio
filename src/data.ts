import {
  Skill,
  Project,
  Experience,
  Achievement,
  Certification,
  Service,
  Testimonial,
} from "./types";

export const PERSONAL_INFO = {
  name: "Gowtham S",
  role: "Senior Angular Front-End Developer",
  experience: "4 Years",
  location: "Chennai, India",
  email: "gowtham18.dev@gmail.com",
  phone: "+91 76671 91559",
  linkedin: "https://linkedin.com/in/gowtham-s-a4a20226b",
  github: "https://github.com/GowthamRio",
  summary:
    "Senior Angular Developer with 4 years of enterprise-level engineering experience building high-performance, responsive Single Page Applications (SPA) for banking, fintech, and education platforms. Proficient in Angular (v8 to v18), TypeScript, RxJS, Angular Signals, Standalone Components, and System Design. Patented BPMN flow comparison system creator, team leader, and performance optimizer.",
  heroImage: "/src/assets/images/hero_workspace_1783413007935.jpg",
};

export const STATISTICS = [
  { id: "exp", value: 4, label: "Years Experience", suffix: "+" },
  { id: "modules", value: 20, label: "Enterprise Modules", suffix: "+" },
  { id: "components", value: 100, label: "Reusable Components", suffix: "+" },
  { id: "screens", value: 500, label: "UI Screens Built", suffix: "+" },
  { id: "hours", value: 1000, label: "Development Hours", suffix: "+" },
];

export const SKILLS: Skill[] = [
  // Frontend Category
  { name: "Angular (v8-v18)", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "JavaScript ES6+", level: 90, category: "Frontend" },
  { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
  { name: "SCSS / SASS", level: 88, category: "Frontend" },
  { name: "Bootstrap & Tailwind", level: 90, category: "Frontend" },

  // Angular Expertise Category
  { name: "Standalone Components", level: 96, category: "Angular Expertise" },
  { name: "Angular Signals", level: 94, category: "Angular Expertise" },
  { name: "RxJS (Reactive)", level: 92, category: "Angular Expertise" },
  { name: "Reactive Forms", level: 95, category: "Angular Expertise" },
  { name: "Lazy Loading", level: 94, category: "Angular Expertise" },
  {
    name: "HTTP Interceptors & Guards",
    level: 93,
    category: "Angular Expertise",
  },
  { name: "Dependency Injection", level: 90, category: "Angular Expertise" },
  { name: "OnPush Change Detection", level: 88, category: "Angular Expertise" },

  // Backend Knowledge Category
  { name: "REST APIs", level: 95, category: "Backend Knowledge" },
  { name: "JWT Authentication", level: 90, category: "Backend Knowledge" },
  { name: "OAuth 2.0", level: 85, category: "Backend Knowledge" },
  { name: "Node.js Basics", level: 75, category: "Backend Knowledge" },
  { name: "Java", level: 70, category: "Backend Knowledge" },
  { name: "Spring Boot", level: 60, category: "Backend Knowledge" },

  // Tools Category
  { name: "Git & GitLab CI", level: 90, category: "Tools" },
  { name: "Jira & Confluence", level: 88, category: "Tools" },
  { name: "Jenkins & SonarQube", level: 85, category: "Tools" },
  { name: "Postman API client", level: 92, category: "Tools" },
  { name: "Cursor AI & Copilot", level: 95, category: "Tools" },
  { name: "Fortify Security", level: 82, category: "Tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Intellect Design Arena",
    location: "Chennai, India",
    period: "Jun 2023 – Apr 2026",
    project: "i-Turmeric [Low-Code Banking Platform]",
    description:
      "A composable low-code banking platform for financial institutions to orchestrate financial apps, handle APIs, form designs, and integrate workflows.",
    responsibilities: [
      "Developed scalable enterprise Single Page Applications (SPA) using Angular v14–v18, Standalone Components, Signals, RxJS, and Reactive Forms.",
      "Architected a custom reusable component library, reducing duplicate code by 40% and accelerating module development.",
      "Researched and evaluated Micro Frontend strategy with Webpack 5 & Module Federation for independently deployable banking micro-apps.",
      "Integrated secure REST APIs using Angular HTTP client, HTTP Interceptors, and RxJS reactive streams, enforcing JWT/OAuth auth.",
      "Developed a patented BPMN Consolidated Flow View and comparison diff-engine, boosting user workflow audit efficiency by 60-70%.",
      "Managed CI/CD deployments using Jenkins, SonarQube, Fortify, and GitLab CI/CD pipelines.",
      "Led the frontend engineering squad for 5 months, conducting code reviews, sprint planning in Jira, and designing system architecture.",
    ],
    technologies: [
      "Angular v14-v18",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "RxJS",
      "Angular Signals",
      "SCSS",
      "D3.js",
      "Module Federation",
      "GitLab CI/CD",
      "Angular Material",
      "Bootstrap",
      "Jenkins",
      "SonarQube",
      "Fortify",
      "GitHub Copilot",
      "Cursor AI",
    ],
  },
  {
    role: "Software Developer",
    company: "Ebullient Info Systems",
    location: "Chennai, India",
    period: "May 2023 – Jun 2023",
    project: "Oremus – Payment Operations System",
    description:
      "An enterprise payment operations, processing, transaction tracking, and approval workflow management system.",
    responsibilities: [
      "Migrated legacy JSP screens into modern Angular SPAs, improving frontend maintainability and rendering speed.",
      "Built custom-designed modular UI components using Angular, Bootstrap, and Angular Material elements.",
      "Wrote responsive, cross-browser interfaces ensuring high performance on mobile, tablet, and widescreen desktop layouts.",
      "Optimized application loadtimes via lazy-loaded routes, state optimization, and clean component destruction lifecycles.",
    ],
    technologies: [
      "Angular v14",
      "TypeScript",
      "Bootstrap",
      "Angular Material",
      "CSS3",
      "GitLab",
      "React",
    ],
  },
  {
    role: "Software Developer",
    company: "Ebullient Info Systems",
    location: "Chennai, India",
    period: "Feb 2022 – Apr 2023",
    project: "Jack Prodigy – University Management System",
    description:
      "A secure comprehensive ERP software managing student portals, admissions, faculty allocation, attendance, and dynamic reporting.",
    responsibilities: [
      "Migrated the university portal from legacy AngularJS to modern component-driven Angular structures.",
      "Created highly interactive dashboard analytics and performance reports using Chart.js.",
      "Created shared reactive form modules, reducing code replication by 35% and enhancing client-side validation UX.",
      "Collaborated closely with REST API backend teams to resolve complex payload mapping and interceptor exceptions.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "CSS3",
      "Chart.js",
      "GitLab",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Enterprise Banking Platform",
    description:
      "High-security banking dashboard and transactional workflow client.",
    longDescription:
      "Built for financial institutions under Intellect Design Arena, this enterprise banking module provides role-based access control, complex workflows, interactive financial ledger graphs, and customizable white-label tenant styling. It handles massive REST payloads securely with custom Angular HTTP Interceptors.",
    features: [
      "Permission-based Role-Based Access Control (RBAC)",
      "White-labeled themes with zero runtime code changes",
      "Robust transactional workflow visualization",
      "Advanced caching HTTP interceptors",
      "Custom components integrated with Angular Material",
    ],
    tech: ["Angular v17", "TypeScript", "RxJS", "SCSS", "SonarQube", "Fortify"],
    image: "/src/assets/images/banking_dashboard_1783413024641.jpg",
    category: "Enterprise",
  },
  {
    id: "p2",
    title: "University Management System",
    description:
      "ERP platform for admissions, portals, attendance, and reporting.",
    longDescription:
      "A comprehensive solution built to manage academic operations. Includes separate modules for students, faculty, and administrative staff, complete with scheduling, dynamic attendance loggers, and charting analytics to track performance metrics.",
    features: [
      "AngularJS to modern Angular migration",
      "Interactive data charts powered by Chart.js",
      "Comprehensive admissions workflow engine",
      "Highly responsive dashboards tailored for student portals",
      "Reusable reactive form schemas",
    ],
    tech: ["Angular", "TypeScript", "Bootstrap", "Chart.js", "GitLab"],
    image: "/src/assets/images/university_dashboard_1783413038511.jpg",
    category: "Dashboard",
  },
  {
    id: "p3",
    title: "BPMN Workflow Visualization & Comparer",
    description:
      "Patented interactive XML flow comparison engine and visualization diagrammer.",
    longDescription:
      "An internally patented utility designed to solve workflow out-of-sync conflicts. It consumes raw workflow XML schemas, parses them, and renders fully interactive workflow tree comparisons using D3.js. It highlights added/deleted steps, routes, and conditions, improving navigation efficiency by 60-70%.",
    features: [
      "Interactive drag-zoom flow diagram renderer",
      "XML-based state mapping and automated schema comparison",
      "Spotlight UI highlighting added/removed states",
      "Conflict resolution visual helper panels",
      "Highly optimized rendering to handle 100+ nested nodes",
    ],
    tech: ["Angular v16", "D3.js", "TypeScript", "RxJS", "Module Federation"],
    image: "/src/assets/images/bpmn_workflow_1783413054974.jpg",
    category: "Workflow",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Reusable Component Library",
    description:
      "Architected a modular component system reducing boilerplate by 40% across bank deployments.",
    metric: "40% Less Code",
  },
  {
    title: "Spotlight Award — BPMN Tool",
    description:
      "Engineered patented BPMN consolidated visualization and XML diff, reducing workflow parsing time.",
    metric: "70% Faster Sync",
  },
  {
    title: "Performance Optimization",
    description:
      "Implemented OnPush change detection and lazy loading to drastically slash initial loadtimes.",
    metric: "2.4s Faster Load",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Purple Fabric AI Foundation Certification",
    issuer: "Intellect Design Arena",
    year: "2026",
  },
  {
    name: "Angular Enterprise Architecture & Optimization Certificate",
    issuer: "Intellect Engineering Academy",
    year: "2025",
  },
  {
    name: "AI-Assisted Pair Programming (Copilot & Cursor)",
    issuer: "Frontend Masters",
    year: "2025",
  },
  {
    name: "Git Version Control Expert",
    issuer: "GitLab Academy",
    year: "2024",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Enterprise Angular Apps",
    description:
      "Building robust, scalable frontend architectures with Angular (v8-v18) featuring state-of-the-art Angular Signals, Standalone Components, and Lazy Loading.",
    icon: "Layout",
  },
  {
    title: "Interactive Dashboards",
    description:
      "Crafting beautiful financial and analytics dashboards with seamless charts, lazy-loaded rendering, and custom state managers.",
    icon: "BarChart",
  },
  {
    title: "BPMN & Workflow Tools",
    description:
      "Designing bespoke custom flow comparison, diagram visualization, and XML rendering systems using advanced D3.js graphs.",
    icon: "GitBranch",
  },
  {
    title: "Performance Audits & Speedups",
    description:
      "Drastically improving web metrics via OnPush change detection, route optimization, prefetching, and bundle size reduction.",
    icon: "Zap",
  },
  {
    title: "API Proxy & Interceptors",
    description:
      "Implementing secure network channels with robust auth guards, JWT payload parsing, and resilient HTTP Interceptors.",
    icon: "ShieldAlert",
  },
  {
    title: "Responsive Migration",
    description:
      "Upgrading outdated legacy platforms (e.g., AngularJS, JSP, jQuery) to cutting-edge TypeScript SPAs with mobile-first fluidity.",
    icon: "MonitorMobile",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mohan",
    role: "Product Manager",
    company: "Intellect Design Arena",
    content:
      "Gowtham has an incredible talent for making complex data easy to digest. His patented work on our BPMN XML flow visualizer alone saved our bank clients hours of manual testing. Absolute superstar developer.",
    avatar: "https://picsum.photos/seed/director/100/100",
  },
  {
    name: "Abdul",
    role: "Product Lead",
    company: "Fintech Systems Inc.",
    content:
      "Working with Gowtham was a seamless experience. He didn't just write Angular code; he brought deep UI craft, proactive optimization, and clean architectural ideas that elevated our dashboard metrics.",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    name: "Antony",
    role: "HR",
    company: "Ebullient Info Systems",
    content:
      "Gowtham is an Angular authority. His mastery over RxJS pipelines, Reactive Forms, and performance optimization helped us migrate several complex legacy applications in record time without downtime.",
    avatar: "https://picsum.photos/seed/anand/100/100",
  },
];
