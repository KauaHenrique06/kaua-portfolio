export const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`

export type Stack = {
    name: string
    logo: string
}

export const stacks = {
    php: { name: "PHP", logo: devicon("php/php-original") },
    laravel: { name: "Laravel", logo: devicon("laravel/laravel-original") },
    node: { name: "Node.js", logo: devicon("nodejs/nodejs-original") },
    mysql: { name: "MySQL", logo: devicon("mysql/mysql-original") },
    postgresql: { name: "PostgreSQL", logo: devicon("postgresql/postgresql-original") },
    redis: { name: "Redis", logo: devicon("redis/redis-original") },
    linux: { name: "Linux", logo: devicon("linux/linux-original") },
    docker: { name: "Docker", logo: devicon("docker/docker-original") },
    git: { name: "Git", logo: devicon("git/git-original") },
    javascript: { name: "JavaScript", logo: devicon("javascript/javascript-original") },
    react: { name: "React", logo: devicon("react/react-original") },
    typescript: { name: "TypeScript", logo: devicon("typescript/typescript-original") },
    tailwind: { name: "Tailwind CSS", logo: devicon("tailwindcss/tailwindcss-original") },
    vite: { name: "Vite", logo: devicon("vitejs/vitejs-original") },
    github: { name: "GitHub", logo: devicon("github/github-original") },
} satisfies Record<string, Stack>
