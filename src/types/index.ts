// Tipe untuk proyek
export interface Project {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
  githubLink?: string;
  date: string;
}

// Tipe untuk pengalaman
export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  logoPath?: string;
}

// Tipe untuk skill
export interface Skill {
  name: string;
  icon: string | React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

// Tipe untuk form kontak
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipe untuk tema
export type Theme = 'light' | 'dark' | 'system';