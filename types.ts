
export type Language = 'ko' | 'en';

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  result: string;
}

export interface LectureItem {
  host: string;
  topic: string;
}

export interface LectureCategory {
  title: string;
  items: LectureItem[];
}

export interface NavItem {
  label: string;
  id: string;
}

export interface ContentData {
  nav: NavItem[];
  hero: {
    mainCopy: string;
    subCopy: string;
    author: string;
    intro: string;
  };
  about: {
    philosophyTitle: string;
    philosophyItems: PhilosophyItem[];
    journeyTitle: string;
    journeyItems: TimelineItem[];
  };
  work: {
    title: string;
    items: CaseStudy[];
    labels: {
      problem: string;
      approach: string;
      result: string;
    }
  };
  lectures: {
    title: string;
    subtitle: string;
    categories: LectureCategory[];
  };
  footer: {
    title: string;
    description: string;
    copyright: string;
  };
}
