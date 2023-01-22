/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#232946",
        title: "#fffffe",
        text: "#b8c1ec",
        primary: "#ff8e3c",
        tertiary: "#d9376e",
        accent: "#00ebc7",
        btn: "#232946",
      },
    },
  },
  plugins: [],
};
