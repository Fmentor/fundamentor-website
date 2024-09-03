/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
    './**/*.{html,js}',],
  theme: {
    colors: {
      'black':'#4F4F52',
      'bodyTextColor':'#344767',
      'lightPink':'#F4ECFF',
      'cyan':'#00C2A7',
      'lightYellow':'#FFFADE',
      'blue':'#439DEE',
      'blueDark':'#1E78E9',
      'white':'#fff'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      robotSlab:['Roboto Slab','sans-serif']

    },
    extend: {},
  },
  plugins: [],
}