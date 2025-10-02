import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-700 hover:bg-primary transition"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
