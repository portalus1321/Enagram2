/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hot-kaishokk': ['hot-kaishokk', 'sans-serif'],
      },
      animation: {
        'color-loop': 'color-cycle 2s infinite',
      },
      spacing:
      {
        'calc-100-30px': 'calc(100% - 40px)',
        'calc-90-30px': 'calc(100% - 100px)',
        
      }
      ,
      keyframes: {
        "color-cycle": {
          "0%, 100%": { backgroundColor: "#bfdbfe" },
          "50%": { backgroundColor: "#60a5fa" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

