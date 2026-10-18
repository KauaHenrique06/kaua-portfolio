import { MailIcon, PhoneIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { stacks } from "@/lib/devicon"

const contacts = [
    {
        label: "E-mail",
        value: "kauahcarmo@gmail.com",
        href: "mailto:kauahcarmo@gmail.com",
        icon: <MailIcon className="size-6 text-primary" />,
    },
    {
        label: "Telefone / WhatsApp",
        value: "+55 (12) 98834-6537",
        href: "https://wa.me/5512988346537",
        icon: <PhoneIcon className="size-6 text-primary" />,
    },
    {
        label: "GitHub",
        value: "KauaHenrique06",
        href: "https://github.com/KauaHenrique06",
        icon: <img className="size-6 dark:invert" src={stacks.github.logo} alt="" />,
    },
]

export function Footer()
{
    return(
        <footer id="contato" className="border-t-2 rounded-2xl shadow-2xl">
            <div className="mx-30 py-10">
                <h2 className="section-title text-xl font-bold">Vamos conversar?</h2>
                <p className="mt-1 text-muted-foreground">
                    Estou aberto a novas oportunidades. Entre em contato por qualquer um dos canais abaixo.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {contacts.map((contact) => (
                        <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                            <Card className="h-full flex-row items-center gap-4 p-5 shadow-2xs transition-colors hover:bg-muted">
                                <span className="shrink-0">{contact.icon}</span>
                                <div>
                                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                                    <p className="font-medium">{contact.value}</p>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
                <p className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © 2026 Kauã Henrique. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
