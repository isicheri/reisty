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
      },
      boxShadow: {
        'lg': '8px 8px 2px 1px rgba(255, 0, 0);',
      },
    },
  },
  plugins: [],
}

