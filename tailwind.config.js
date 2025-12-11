/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#094d88',
          600: '#0a5a9e'
        },
        accent: {
          500: '#10ac8b',
          600: '#0d9488'
        }
      },
      boxShadow: {
        glass: '0 12px 36px rgba(0,0,0,0.18)'
      }
    },
  },
  plugins: [],
};
