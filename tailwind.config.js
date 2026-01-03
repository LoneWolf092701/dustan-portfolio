/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff41", // Matrix green
        secondary: "#00d9ff", // Cyan
        noir: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#141414",
          700: "#1e1e1e",
          600: "#282828",
          500: "#323232",
        },
        neon: {
          green: "#00ff41",
          cyan: "#00d9ff",
          white: "#ffffff",
        }
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 255, 65, 0.5)",
        "neon-cyan": "0 0 20px rgba(0, 217, 255, 0.5)",
        "neon-strong": "0 0 40px rgba(0, 255, 65, 0.8)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)",
        "scanline": "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
            borderColor: 'rgba(0, 255, 65, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.8)',
            borderColor: 'rgba(0, 255, 65, 1)'
          },
        },
      }
    },
  },
  plugins: [],
}