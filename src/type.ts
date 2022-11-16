export interface ProjectProps {
  filter: string;
  id: string;
  title: string;
  describtion: string[];
  date: string;
  tools: string[];
  features: string[];
  tabs: string[];
  tabContent: string[][];
  git: string;
  url: string;
  bgColor: string;
}

export interface StudyProps {
  filter: string;
  id: string;
  title: string;
  img?: string;

  git?: string | undefined;
  url?: string;
  detail?: string;
}

export interface ExpProps {
  date: string;
  title: string;
  subtitle: string;
}

export interface CerProps {
  date: string;
  text: string;
}
