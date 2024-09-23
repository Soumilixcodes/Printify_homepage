/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          cyan: {
            900: '#164E63', // Deep cyan color
          },
        },
        boxShadow: {
          cyan: '0 4px 6px -1px rgba(22, 78, 99, 0.5)', // Custom cyan shadow
        },
        fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  
