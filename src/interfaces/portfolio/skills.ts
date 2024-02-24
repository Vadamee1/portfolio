export interface HardSkills {
  key: number;
  name: string;
  href: string;
  frameworks?: Frameworks[];
  description?: string;
}

export interface Frameworks {
  key: number;
  content: string;
  className?: string;
}
