export interface ProjectProps {
  filter: string;
  id: string;
  title: string;
  describtion: string[];
  date: string;
  tools: string[];
  features: string[];
  git: string;
  url: string;
  imgs: string[];
  bgColor: string;
}

export interface StudyProps {
  filter: string;
  id: string;
  title: string;
  img?: string;
  describtion?: string[];
  date?: string;
  tool?: string[];
  features?: string[] | undefined;
  git?: string | undefined;
  url?: string;
  ect?: string | undefined;
  imgs?: string[];
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
