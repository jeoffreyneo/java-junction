/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      boxShadow: {
        glow: '0 0 25px #06b6d4',
      },
    },
  },
  plugins: [],
}
