/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EBF3FF",
          100: "#559FFF",
        },

        white: "#FCFCFC",
      },
    },
    plugins: [],
  },
};
