import { stacks, type Stack } from "@/lib/devicon"

export type TechCategory = {
    id: string
    title: string
    stacks: Stack[]
    description: string
}

export const techCategories: TechCategory[] = [
    {
        id: "backend",
        title: "Back-end",
        stacks: [
            stacks.php,
            stacks.laravel,
            stacks.node,
        ],
        description: "Experiência prática no ecossistema PHP com o framework Laravel, atuando na criação e refatoração de APIs RESTful, integração de serviços externos e controle de acesso (RBAC). Recentemente, comecei a estudar Node.js, já desenvolvendo APIs com Prisma e o query builder Knex.",
    },
    {
        id: "banco-de-dados",
        title: "Banco de dados",
        stacks: [
            stacks.mysql,
            stacks.postgresql,
            stacks.redis,
        ],
        description: "Gerenciamento e modelagem de bancos de dados relacionais com MySQL e PostgreSQL, além de Redis para cache e filas.",
    },
    {
        id: "infraestrutura",
        title: "Infraestrutura",
        stacks: [
            stacks.linux,
            stacks.docker,
            stacks.git,
        ],
        description: "Conhecimentos práticos em ambientes Linux e Docker, além de controle de versão avançado com Git e GitHub.",
    },
    {
        id: "frontend",
        title: "Front-end",
        stacks: [
            stacks.javascript,
            stacks.react,
            stacks.typescript,
            stacks.tailwind,
        ],
        description: "Foco atual dos meus estudos e projetos, com o objetivo de me consolidar como desenvolvedor Full Stack.",
    },
]
