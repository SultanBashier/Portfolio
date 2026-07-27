export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    icon: string;
    imageUrl: string;
    technologies: string[];
    githubUrl?: string;
    githubFrontendUrl?: string;
    githubBackendUrl?: string;
    liveDemoUrl?: string;
}
