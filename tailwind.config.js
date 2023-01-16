/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24c4f7',
      },

      container: {
        center: true,
      },
    },

    screens: {
      xs: '100vw',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1000px',
      // '2xl': '1280px',
    },
  },
  plugins: [],
}
