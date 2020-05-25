/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        "primary": ' hsl(181, 50%, 53%)',
        "secondary": 'hsl(179, 51%, 38%)',
        "ld-pink": 'hsl(340, 90%, 65%)',
        "secondary-dark": "hsl(179, 59%, 15%)",
        "ld-yellow": "hsl(43, 100%, 63%)",
        "primary-light": '#52cbcd9c',
        "grey": ' #2d3748',
        "darker": '#00000058',
        "light_grey": '#d3d3d323',
        "lighter": '#c9c9c9;'
      },
      height: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
      }
    },
  },
  // purge: false,
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
};
