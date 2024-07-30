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
        'custom2': '80px',
      },

      width: {
        'custom': '130px',
        'custom2': '80px',
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
      })
    }
  ],
}

