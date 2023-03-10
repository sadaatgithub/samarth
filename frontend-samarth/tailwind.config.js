const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sourceSansPro:['var(--source-sans-pro)', ...fontFamily.sans],
        raleway:['var(--source-raleway)',...fontFamily.sans]

      },
      animation:{
        slideInLeft:
        "slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        drawerDown:
          "drawerDown 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
          drawerUp:
          "drawerUp 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
      },keyframes:{
        slideInLeft: {
          "0%": {
            // -webkit-transform: translateX(-1000px);
            transform: "translateX(-1000px)",
            opacity: 0,
          },
          "100%": {
            // -webkit-transform: translateX(0);
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        drawerDown: {
          "0%": {
            // -webkit-transform: translateX(-1000px);
            height: "0px",

            opacity: 0,
          },
          "100%": {
            // -webkit-transform: translateX(0);
            height:  "160px",

            opacity: 1,
          },
        },
        drawerUp: {
          "0%": {
            // -webkit-transform: translateX(-1000px);
            height: "160px",

            opacity: 1,
          },
          "100%": {
            // -webkit-transform: translateX(0);
            height:  "0px",

            opacity: 0,
            display:"block"
          },
        },
      }
    },
  },
  plugins: [],
}
