export interface Skill {
  name: string;
  icon: string;
  category: 'programming' | 'web' | 'tools' | 'soft';
  proficiency: number; // 1-5
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  percentage: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  category: 'hackathon' | 'competition' | 'certification' | 'other';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
