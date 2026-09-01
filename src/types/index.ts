export interface ImpactStat {
  value: string;   // e.g. "40%", "sub-1s", "6"
  label: string;   // e.g. "latency reduction"
}

export interface BulletGroup {
  groupLabel: string;   // e.g. "Architecture", "Performance engineering"
  bullets: string[];    // supports **bold** markup via renderBoldMarkup
}

export interface Project {
  id: string;
  title: string;
  category: string;        // badge shown on the card, e.g. "Live" or "Python · C · ZeroMQ"
  subtitle: string;        // company/year/live url label
  status?: 'complete' | 'in-progress';
  context: string;         // 1-sentence context line
  groups: BulletGroup[];
  impact?: ImpactStat[];
  technologies: string[];
  link?: string;
  github?: string;
  images?: string[];       // photo strip in card + gallery in modal
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  context: string;
  impact?: ImpactStat[];
  groups: BulletGroup[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  courses?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  externalUrl?: string;
}

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}
