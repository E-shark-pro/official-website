"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
                // Circle animation start point
                const x = e.clientX
                const y = e.clientY
                document.documentElement.style.setProperty("--circle-x", `${x}px`)
                document.documentElement.style.setProperty("--circle-y", `${y}px`)
                document.documentElement.classList.add("theme-transition")

                // Switch between light & dark
                setTheme(theme === "light" ? "dark" : "light")

                // Remove animation class after it finishes
                setTimeout(() => {
                    document.documentElement.classList.remove("theme-transition")
                }, 600)
            }}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
