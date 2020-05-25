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
        "primary": ' #4bc1c3',
        "secondary": '#2f9291',
        "ld-pink": '#f6558b',
        "secondary-dark": "#103E3D",
        "ld-yellow": "#FFCA41",
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
