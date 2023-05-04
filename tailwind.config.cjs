/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        galaxy: "url('/galaxy.jpg')",
      },
    },
  },
  plugins: [],
};
