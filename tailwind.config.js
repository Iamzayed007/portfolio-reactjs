module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#566282',
        'custom': '#2d3447',
        'textColor': '#ebeef5',
        'buttonColor': '#021647',
      },
      height: {
        '30rem': '33rem'
      },
      width:{
        '22rem': '24rem'
      }
   
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
