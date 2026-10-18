import { ThemeToggle } from "./ThemeToggle"

export function NavBar() 
{
    return(
        <header className="sticky top-0 z-50 flex items-center justify-between border-b-2 rounded-2xl bg-background/80 p-4 shadow-2xs backdrop-blur">
            <p className="font-bold">Kauã Henrique</p>
            <nav className="flex justify-end items-center gap-3">
                <a className="link-underline" href="#sobre">Sobre</a>
                <a className="link-underline" href="#tecnologias">Tecnologias</a>
                <a className="link-underline" href="#projetos">Projetos</a>
                <ThemeToggle />
            </nav>
        </header>
    );
}