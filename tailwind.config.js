/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/index.html",
  "./client/src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      maxHieght: {
        '1/2': '50%',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


