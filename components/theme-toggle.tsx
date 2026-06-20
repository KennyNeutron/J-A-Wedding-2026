"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-surface/50 hover:text-primary">
        <span className="h-[1.2rem] w-[1.2rem]" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-surface/50 hover:text-primary focus-visible:outline-none cursor-pointer"
      title="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
