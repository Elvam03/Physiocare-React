/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad-pro': { min: '834px', max: '1024px' }, // iPad Pro
      },
      
    },
  },
  plugins: [],
}

