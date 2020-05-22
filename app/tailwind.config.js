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
        "primary": "#4DC1C3",
        "primary-light": '#52cbcd9c',
        "secondary": "#2F9291",
        "secondary-dark": "#103E3D",
        "ld-pink": "#F6568C",
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
