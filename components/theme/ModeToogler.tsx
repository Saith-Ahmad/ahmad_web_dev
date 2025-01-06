"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" size={'icon'}  onClick={() => setTheme(theme === 'light' ? "dark" : "light")} className="bg-text_purple">
      {theme === 'light' ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" fill="#fff" color="#fff"/>
        :
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" fill="#fff"/>
      }
    </Button>
  )
}
