/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
      },
    },
  },
  plugins: [],
};
