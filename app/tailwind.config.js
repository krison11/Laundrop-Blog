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
        navbar: '#4DC1C3',
        nav_lighter: '#52cbcd9c',
        footer: '#103E3D',
        image_text: '#2F9291',
        button: '#F6568C',
        yellow: '#FFCA41',
        white: '#FFFFFF',
        grey: ' #2d3748',
        darker: '#00000058',
        black: '#000000',
        light_grey: '#d3d3d323',
        lighter: '#c9c9c9;',
        primary: "#4DC1C3",
        secondary: "#2F9291",
        "ld-pink": "#F6568C",
        "ld-yellow": "#FFCA41"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      },
      letterSpacing: {
        widest: '.2em'
      }
    },
  },
  purge: false,
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
};
