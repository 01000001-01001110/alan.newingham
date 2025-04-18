export interface Job {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  notes?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'tool' | 'language' | 'methodology';
  proficiency: number; // 0-1 scale
  yearStarted: number;
  projects: string[]; // IDs of related projects
  relatedSkills: string[]; // IDs of related skills
  description?: string;
  certifications?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  link?: string;
  repository?: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  highlights: string[];
  category: 'professional' | 'personal' | 'academic';
}
