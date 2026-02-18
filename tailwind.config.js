/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define a Satoshi como a fonte sans padrão
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}