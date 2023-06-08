/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'pop' : ['Poppins', 'sans-serif'],
        'pop-bold' : ['Poppins', 'sans-serif', '300'],
        'roboto' : ['Roboto Mono', 'monospace']

      },
      width:{
        '40' : '58rem'
      },
      screens: {
        'sm': '320px',  // Target iPhone 5 screen size and smaller
        'md': '375px',  // Target iPhone 6/7/8 screen size and smaller
        'lg': '414px',  // Target iPhone 6/7/8 Plus screen size and smaller
      },
    },
  },
  plugins: [require('tailwindcss')],
}

