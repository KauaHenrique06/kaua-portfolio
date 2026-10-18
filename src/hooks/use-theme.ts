import { useEffect, useState } from "react"

type Theme = "light" | "dark"

function getInitialTheme(): Theme
{
    try {
        const saved = localStorage.getItem("theme")
        if (saved === "light" || saved === "dark") return saved
    } catch {
        // localStorage indisponível (ex.: modo privado)
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function useTheme()
{
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        try {
            localStorage.setItem("theme", theme)
        } catch {
            // localStorage indisponível (ex.: modo privado)
        }
    }, [theme])

    const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"))

    return { theme, toggleTheme }
}
