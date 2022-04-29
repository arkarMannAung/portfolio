module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'silver-gray': '#2d2e32',
        'dark-gray': '#25262a',
        'circle': '#29282a',
        'text-gray': '#9898a0',
      },
      width: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '184': '46rem',
        '208': '52rem',
      },
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '184': '46rem',
        '208': '52rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
