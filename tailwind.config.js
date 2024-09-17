/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'sans-serif']
      },
      boxShadow: {
        'bold': '8px 8px rgb(1 1 1)'
      },
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        gray: 'hsl(0, 0%, 42%)',
        'gray-dark': 'hsl(0, 0%, 7%)',
      },
    },
  },
  plugins: [],
}

