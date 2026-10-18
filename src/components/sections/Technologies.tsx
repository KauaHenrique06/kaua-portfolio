import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { techCategories } from "@/data/technologies"

export function Technologies()
{
    return(
        <section id="tecnologias" className="mx-30 my-10">
            <h2 className="section-title mb-4 ml-4">02 . Tecnologias</h2>
            <Card className="p-5 text-base shadow-2xs">
                <CardContent className="px-0">
                    <Accordion defaultValue={[techCategories[0].id]}>
                        {techCategories.map((category) => (
                            <AccordionItem key={category.id} value={category.id}>
                                <AccordionTrigger className="items-center py-4 text-base hover:no-underline">
                                    <span className="w-40 font-medium">{category.title}</span>
                                    <div className="flex flex-wrap gap-3">
                                        {category.stacks.map((stack) => (
                                            <img key={stack.name} className="size-8" src={stack.logo} alt={stack.name} title={stack.name} />
                                        ))}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 text-base text-muted-foreground">
                                    <p>{category.description}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </section>
    );
}
