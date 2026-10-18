import { Card, CardContent } from "@/components/ui/card"

export function About()
{
    return(
        <section id="sobre" className="mx-30 my-10">
            <h2 className="mb-2 ml-4">01 . Sobre mim</h2>
            <Card className="p-5 text-base shadow-2xl">
                <CardContent className="space-y-4 px-0">
                    <p>
                        Atualmente cursando o 6º semestre de Análise e Desenvolvimento de Sistemas na Fatec Prof. Waldomiro May, desenvolvo continuamente minhas habilidades na área de tecnologia com foco em desenvolvimento de software, arquitetura e soluções em sistemas.
                    </p>
                    <p>
                        Possuo sólida experiência prática no ecossistema PHP com o framework Laravel, atuando na criação e refatoração de APIs RESTful, integração de serviços externos e controle de acesso (RBAC).
                    </p>
                    <p>
                        Tenho domínio no gerenciamento e modelagem de bancos de dados relacionais (MySQL e PostgreSQL), além de controle de versão avançado com Git e GitHub. Além de que na parte mais voltada á infraestrutura, possuo conhecimentos práticos em ambientes Linux e Docker.
                    </p>
                    <p>
                        Atualmente estou com o objetivo de me consolidar como um desenvolvedor Full Stack, e com isso focando parte dos meus estudos e projetos para o Front-end.
                    </p>
                    <p>
                        Estou em busca de novas oportunidades no mercado de tecnologia que me permitam aplicar meus conhecimentos técnicos, enfrentar novos desafios e agregar valor continuamente ao crescimento da empresa e à minha evolução profissional.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}
