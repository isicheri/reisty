/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blg': '0px 8px 10px 10px rgba(211,211,211);',
      }
    },
  },
  plugins: [],
}

