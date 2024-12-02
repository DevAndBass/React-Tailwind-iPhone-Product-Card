/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        btnBlack: '#000000',
        btnBlue: '#1D4ED8',
        btnPink: '#D946EF',
        btnWhite: '#FFFFFF',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #a18cd1, #fbc2eb)',
      },
    },
    plugins: [],
  }
}