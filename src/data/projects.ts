import { stacks, type Stack } from "@/lib/devicon"

export type Project = {
    id: string
    title: string
    stacks: Stack[]
    description: string[]
    github?: string
}

export const projects: Project[] = [
    {
        id: "finance-project",
        title: "Finance Project",
        stacks: [
            stacks.php,
            stacks.laravel,
            stacks.postgresql,
            stacks.redis,
            stacks.docker,
        ],
        description: [
            "API para organizar despesas em grupo e arrecadar dinheiro via Pix, com cobranças lembradas automaticamente pelo WhatsApp. O usuário cria eventos com grupos de despesa e participantes, e o sistema gera as cobranças à vista, parceladas ou divididas entre todos.",
            "Construí o projeto para praticar integrações com serviços externos (Asaas para pagamentos, Evolution API para WhatsApp e BrasilAPI para CEP), processamento assíncrono com filas no Redis e Laravel Horizon, e comunicação em tempo real com Laravel Reverb. Conta com autenticação JWT, papéis e permissões e documentação OpenAPI gerada com Scramble.",
        ],
        github: "https://github.com/KauaHenrique06/finance-project",
    },
    {
        id: "brew",
        title: "Brew",
        stacks: [
            stacks.php,
            stacks.laravel,
            stacks.postgresql,
            stacks.redis,
            stacks.docker,
        ],
        description: [
            "API de uma plataforma que conecta desenvolvedores e empresas, com perfis profissionais, vagas de emprego e recomendações usando embeddings armazenados no PostgreSQL com pgvector. Desenvolvida em dupla como trabalho de graduação.",
            "Fiquei responsável pelo CRUD de vagas, projetos e soft skills das empresas, pela atualização e exclusão de perfis e pelo cadastro de idiomas, além dos testes de funcionalidade com Pest.",
        ],
        github: "https://github.com/lucasAMBR/tg-api",
    },
    {
        id: "starter-pack-laravel",
        title: "Starter Pack Laravel",
        stacks: [
            stacks.php,
            stacks.laravel,
            stacks.postgresql,
            stacks.redis,
            stacks.docker,
        ],
        description: [
            "Estrutura base para iniciar novas APIs com Laravel 12 e PHP 8.2 sem repetir a configuração inicial. Já vem com autenticação JWT, papéis e permissões, filas com Redis e Laravel Horizon, WebSockets com Laravel Reverb, documentação com Scramble e ambiente Docker com PostgreSQL.",
        ],
        github: "https://github.com/KauaHenrique06/starter-pack-laravel",
    },
    {
        id: "portfolio",
        title: "Portfólio",
        stacks: [
            stacks.react,
            stacks.typescript,
            stacks.tailwind,
            stacks.vite,
        ],
        description: [
            "Este site. Desenvolvido com React, TypeScript e Tailwind CSS, usando componentes do shadcn/ui, como parte dos meus estudos de front-end.",
        ],
        github: "https://github.com/KauaHenrique06/kaua-portfolio",
    },
]
