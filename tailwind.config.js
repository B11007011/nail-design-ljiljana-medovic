/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#FCFCFC',
        accent: '#FFF1F6'
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}

