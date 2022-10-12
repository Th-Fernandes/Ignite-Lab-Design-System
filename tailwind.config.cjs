/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}',],
  theme: {
    colors: {
      cyan: {
        '300': '#9BE1FB',
        '500': '#81d8f7'
      },
      black: '#000000',
      gray: {
        '100': '#E1E1E6',
        '200': '#C4C4CC',
        '400': '#7C7C8A',
        '800': '#202024',
        '900': '#121214',
      },
    },
    
    extend: {
      fontFamily: {
        'sans': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
