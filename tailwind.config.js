/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0a192f',
        'reactor-blue': '#1e40af',
        'control-gray': '#e5e7eb',
        'radiation-gold': '#f5cb5c',
        'atomic-white': '#fdfdfd',
      },
      fontFamily: {
        'heading': ['IBM Plex Sans Condensed', 'Orbitron', 'Anton', 'sans-serif'],
        'body': ['Inter', 'DM Sans', 'Work Sans', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'schematic-line': 'schematic-line 3s ease-in-out infinite',
        'reactor-hum': 'reactor-hum 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #f5cb5c' },
          '100%': { boxShadow: '0 0 20px #f5cb5c, 0 0 30px #f5cb5c' },
        },
        'schematic-line': {
          '0%, 100%': { strokeDashoffset: '0' },
          '50%': { strokeDashoffset: '10' },
        },
        'reactor-hum': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}