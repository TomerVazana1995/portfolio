export enum SelectedPage{
  Home = "home",
  AboutMe = "aboutme",
  Projects = "projects",
  ContactMe = "contactme"
}

export interface ProjectType {
  image: string;
  title: string;
  description: string;
  skills?: string;
  url: string;
}