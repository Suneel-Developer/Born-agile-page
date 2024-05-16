/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#EEFF55",
        "sky-blue": "#BFF4FF",
        "shade-gray": "#1C1C1C",
        "black-100": "#171715",
        "black-200": "#0E0E0E",
        "black-300": "#00000033",
        "dark-white": "#F5FF9F",
        "white-100": "#F5F5FA",
        "white-200": "#FBFFDB",
        "black-gray": "#232323",
      },
      maxWidth: {
        xlg: "1305px"
      },
      screens: {
        "xlg": "1205px",
        "slg": "955px",
        "xsm": "524px",
        "xxsm": "380px"
      }
    },
  },
  plugins: [],
};
