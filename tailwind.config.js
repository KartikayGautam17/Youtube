/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: { colors : {
        "myblack-500" :"#0F0F0F",
        "myblack-300" :"#121212",
        "mygrey-500" :"#222222"
      }},
    },
    plugins: [],
  }
