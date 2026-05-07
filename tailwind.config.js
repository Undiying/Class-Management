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
            light: '#bbf7d0',
            DEFAULT: '#10b981',
            dark: '#065f46',
          },
          violet: {
            light: '#ddd6fe',
            DEFAULT: '#7c3aed',
            dark: '#4c1d95',
          },
          blue: {
            light: '#bae6fd',
            DEFAULT: '#0284c7',
            dark: '#0c4a6e',
          },
        },
        surface: {
          50: '#e0f2fe',    // Very Light Sky Blue (page background)
          100: '#bae6fd',   // Light Sky Blue (hover tint)
          200: '#7dd3fc',   // Medium Sky (borders, dividers)
          300: '#475569',   // Muted Slate Text
          900: '#0c1a2e',   // Deep Blue (headings, text)
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

