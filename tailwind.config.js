/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      mini : '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "Layer1" : "#36BA98",
      "Layer2" : "#E9C46A",
      "Layer3" : "#F4A261",
      "Layer4" : "#E76F51",
      "Text1" : "#000000"
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

