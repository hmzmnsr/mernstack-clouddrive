/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'gradient-from': '#06b6d4',
        'gradient-to': '#3b82f6', 
      },

      height: {
        'custom': '130px',
      },

      width: {
        'custom': '130px',
      },

      fontFamily: {
        'paintbrush': ['Dancing Script', 'cursive'],
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
      })
    }
  ],
}

