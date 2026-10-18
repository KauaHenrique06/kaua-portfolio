import { ThemeToggle } from "./ThemeToggle"

export function NavBar() 
{
    return(
        <header className="items-center justify-between p-4 flex m-0 border-b-2 rounded-2xl shadow-2xs sticky">
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