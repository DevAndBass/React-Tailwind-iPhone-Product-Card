/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #a18cd1, #fbc2eb)',
      },
    },
    plugins: [],
  }
}