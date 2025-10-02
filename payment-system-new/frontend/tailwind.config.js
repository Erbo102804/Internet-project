/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        dark: {
          900: '#0f172a',
          800: '#1e293b', 
          700: '#334155',
        }
      }
    },
  },
  plugins: [],
}
