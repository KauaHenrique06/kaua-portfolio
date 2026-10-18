import { Button } from "@/components/ui/button"

export function Hero()
{
    return(
        <section id="inicio" className="mx-30 my-10 flex items-center gap-10">
            <img className="size-50 shrink-0 rounded-full object-cover shadow-2xs" src="https://avatars.githubusercontent.com/u/187976126?v=4" alt="Foto de Kauã Henrique" />
            <div>
                <h1 className="text-4xl font-bold">Kauã Henrique</h1>
                <p className="mt-2 text-xl text-primary-strong">Desenvolvedor Full Stack</p>
                <p className="mt-4 text-muted-foreground">
                    Estudante de Análise e Desenvolvimento de Sistemas, com experiência em PHP, Laravel e bancos de dados relacionais.
                </p>
                <div className="mt-6 flex gap-3">
                    <Button size="lg" nativeButton={false} render={<a href="https://github.com/KauaHenrique06" target="_blank" rel="noreferrer" />}>
                        GitHub
                    </Button>
                    <Button size="lg" variant="outline" nativeButton={false} render={<a href="#projetos" />}>
                        Ver projetos
                    </Button>
                </div>
            </div>
        </section>
    );
}
