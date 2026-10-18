export function NavBar() 
{
    return(
        <header className="items-center justify-between p-4 flex m-0 border-b-2 rounded-2xl shadow-2xs">
            <p className="font-bold">Kauã Henrique</p>
            <nav className="flex justify-end items-center gap-3">
                <a href="#sobre">Sobre</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#">Projetos</a>
            </nav>
        </header>
    );
}