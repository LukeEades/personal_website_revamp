import { useState } from "react"
const useTheme = () => {
  const savedTheme = localStorage.getItem("theme")
  const [mode, setMode] = useState(savedTheme)
  const root = document.querySelector(":root")
  const preferredColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  const setTheme = mode => {
    setMode(mode)
    root.className = mode
    localStorage.setItem("theme", mode)
  }
  if (mode) {
    root.className = mode
  } else {
    setTheme(preferredColorScheme.matches ? "dark" : "light")
  }
  preferredColorScheme.addEventListener("change", e => {
    setTheme(e.matches ? "dark" : "light")
  })
  const toggleTheme = () => {
    setTheme(mode == "dark" ? "light" : "dark")
  }
  return [mode, toggleTheme]
}

export default useTheme
