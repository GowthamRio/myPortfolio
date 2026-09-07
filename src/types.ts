export interface Skill {
  name: string;
  level: number; // percentage, e.g. 95
  category: "Frontend" | "Angular Expertise" | "Backend Knowledge" | "Tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "Enterprise" | "Dashboard" | "Workflow";
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  project?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
  metric: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
