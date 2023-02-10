/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./public/**/*.{html,js,jsx}" ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:['Satoshi', 'sans-serif']
      },
      colors:{
        'primary': '#121B27',
        'light' :'#FCFCFC',
      }
    },
  },
  plugins: [],
}
