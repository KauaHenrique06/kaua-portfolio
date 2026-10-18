import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"

export function Projects()
{
    return(
        <section id="projetos" className="mx-30 my-10">
            <h2 className="section-title mb-4 ml-4">03 . Projetos</h2>
            <Card className="p-5 text-base shadow-2xs">
                <CardContent className="px-0">
                    <Accordion defaultValue={[projects[0].id]}>
                        {projects.map((project) => (
                            <AccordionItem key={project.id} value={project.id}>
                                <AccordionTrigger className="items-center py-4 text-base hover:no-underline">
                                    <span className="w-60 font-medium">{project.title}</span>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stacks.map((stack) => (
                                            <img key={stack.name} className="size-8" src={stack.logo} alt={stack.name} title={stack.name} />
                                        ))}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 text-base text-muted-foreground [&_a]:no-underline [&_a]:hover:text-primary-foreground">
                                    {project.description.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                    {project.github && (
                                        <Button size="lg" nativeButton={false} render={<a href={project.github} target="_blank" rel="noreferrer" />}>
                                            Ver no GitHub
                                        </Button>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </section>
    );
}
