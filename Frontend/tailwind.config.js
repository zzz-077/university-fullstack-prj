/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
