/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to right, #7E2419, #126C87)',
      // },

      colors: {
        'gradient-from': '#06b6d4',
        'gradient-to': '#3b82f6',
         customBlue: '#212F65',
         customBlueTwo : '#4456FF',
         
      },
      height: {
        'custom': '130px',
        'custom2': '80px',
        'custom3' : '50px',
      },
      width: {
        'custom': '130px',
        'custom2': '80px',
        'custom3' : '50px',
        'customborderwidth' : '400px',
        
      },
      fontFamily: {
        'paintbrush': ['Dancing Script', 'cursive'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-gradient-text': {
          background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.autofill-transparent': {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 1000px transparent inset !important',
            '-webkit-text-fill-color': '#fff !important', // Adjust text color if needed
          },
          '&:-moz-autofill': {
            'box-shadow': '0 0 0 1000px transparent inset !important',
            '-moz-text-fill-color': '#fff !important', // Adjust text color if needed
          },
          '&:-ms-input-placeholder': {
            'background-color': 'transparent !important',
          },
        },
      }, {
        variants: ['responsive', 'hover', 'focus'],
      });
    },
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
