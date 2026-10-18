import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle()
{
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === "dark"

    return(
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
