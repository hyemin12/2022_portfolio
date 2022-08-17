export interface ProjectProps {
  filter: string;
  id: string;
  title: string;
  img?: string;
  describtion: string[];
  date: string;
  tool: string[];
  features?: string[] | undefined;
  git?: string | undefined;
  url: string;
  ect?: string | undefined;
  detailImg: string[];
}
export interface WorkProps {
  filter: string;
  id: string;
  title: string;
  describtion: string[];
  date: string;
  tool: string[];
  git: string | undefined;
  url: string;
  bgColor: string;
  detailImg: string[];
}
