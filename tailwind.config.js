/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
     
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
    },
    container:{
      center: true,
      padding:{
        DEFAULT:"12px",
      }
    }
   
     
  },
  plugins: [],
}