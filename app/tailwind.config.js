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
        "primary": 'hsl(181, 50%, 53%)',
        "primary-light": '#52cbcd9c',
        "secondary": 'hsl(179, 51%, 38%)',
        "secondary-dark": "#103E3D",
        "ld-pink": 'hsl(340, 90%, 65%)',
        "ld-yellow": "#FFCA41",
        "grey": ' #2d3748',
        "darker": '#00000058',
        "light_grey": '#d3d3d323',
        "lighter": '#c9c9c9;'
      },
      height: {
        "35rem": "35rem",
        "30rem": "30rem",
        "25rem": "25rem",
        "20rem": "20rem",
        "90vh": "90vh",
        "93vh": "93vh",
        "95vh": "95vh",

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
