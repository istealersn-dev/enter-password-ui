/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs' : '360px',
      // => @media (min-width: 375px) {....}

      'xs' : '375px',
      // => @media (min-width: 375px) {....}

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        pmblue: 'hsla(216, 62%, 19%, 1)', // => Setting primary color
      },
      fontFamily: {
        sans: [ 'Noto Sans', 'sans-serif'], // => Setting primary fontFace
      },
      fontSize: {
        'xxs' : '0.625rem', // => Setting lowest fontSize
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
