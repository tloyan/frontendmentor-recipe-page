interface ProjectInfoType {
    name: string,
    appName: string,
    url: string,
    githubUrl: string,
    previewUrl: string,
    previewAlt: string,
    title: string,
    description: string,
    keywords: string[]
  }

function getProjectInfo(): ProjectInfoType {
    const name = "Recipe Page";
    const appName = "recipe-page";

    return {
        name,
        appName,
        url: `https://${appName}.tloyan.com`,
        githubUrl: `https://github.com/tloyan/frontendmentor-${appName}`,
        previewUrl: `https://${appName}.tloyan.com/preview.jpg`,
        previewAlt: `${name} preview made by Thomas Loyan`,
        title: `${name} | Frontend Mentor Challenge | Thomas Loyan`,
        description: `Frontend Mentor Challenge: ${name} built with Typescript, Next.js, Tailwind CSS.`,
        keywords: [
            'Next.js',
            'React',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Responsive Design',
            'Responsive web design',
            'Frontend developer',
            'Fullstack developer',
            'Thomas Loyan',
            'Thomas Loyan developer',
            'Frontend Mentor solution',
            'Freelance',
            name
        ]
    }
}

export const projectInfo = getProjectInfo()