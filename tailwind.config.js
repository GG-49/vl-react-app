// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter var', ...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  // ...
}