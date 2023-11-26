/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: 'hsl(155, 18%, 39%)',
            
      }
    },
  },
  plugins: [require("daisyui")],
}

