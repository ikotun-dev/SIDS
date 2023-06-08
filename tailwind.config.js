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
        'pop-bold' : ['Poppins', 'sans-serif', '300']

      }
    },
  },
  plugins: [({
    input : {
      maxWidth : '20px',
    },
  })],
}

