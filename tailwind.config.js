/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        3: '3px',
      },
      keyframes: {
        underlineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underlineExpand: 'underlineExpand 0.3s ease-out forwards',
      },
    },

  },
  plugins: [],
}
