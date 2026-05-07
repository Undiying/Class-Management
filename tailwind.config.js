/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            light: '#dcfce7',
            DEFAULT: '#10b981',
            dark: '#064e3b',
          },
          violet: {
            light: '#ede9fe',
            DEFAULT: '#a78bfa',
            dark: '#4c1d95',
          },
          blue: {
            light: '#e0f2fe',
            DEFAULT: '#38bdf8',
            dark: '#0c4a6e',
          },
        },
        surface: {
          50: '#0f172a',    // Deep Blue-Slate
          100: '#1e293b',   // Mid Blue-Slate
          200: '#334155',   // Light Blue-Slate
          300: '#94a3b8',   // Muted Blue-Slate Text
          900: '#f8fafc',   // Near White Text
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

