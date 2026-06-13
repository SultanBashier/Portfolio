export interface Project {
    id: number;
    title: string;
    titleAr?: string;
    category: string;
    categoryAr?: string;
    description: string;
    descriptionAr?: string;
    icon: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
}