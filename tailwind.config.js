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
            DEFAULT: '#22c55e',
            dark: '#166534',
          },
          violet: {
            light: '#ede9fe',
            DEFAULT: '#8b5cf6',
            dark: '#5b21b6',
          },
          blue: {
            light: '#e0f2fe',
            DEFAULT: '#0ea5e9',
            dark: '#075985',
          },
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          900: '#0f172a',
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

