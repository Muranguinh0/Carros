/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#E28625',
      'green': '#006971',
      'dark-green': '#004140',
      'off-white': 'rgba(255, 255, 255, .75)',
      'white': '#fff',
      'off-white-bg': '#f2f2f2'
    },
    
    fontFamily: {
      'shoulders': '"Big Shoulders Display"',
      'lexend': '"Lexend Deca"'  
    }
  },
  plugins: [],
}