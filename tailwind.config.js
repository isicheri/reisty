/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadowlogin: {
        'blg': '0px 8px 10px 10px rgba(211,211,211);',
      },
      boxShadow: {
        'lg': '8px 8px 2px 1px rgba(255, 0, 0);',
      },
    },
  },
  plugins: [],
})

