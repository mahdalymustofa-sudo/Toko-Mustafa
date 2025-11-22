/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        gaul: "var(--gaul)",
        "variable-collection-abu": "var(--variable-collection-abu)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-colorjoin": "var(--variable-collection-colorjoin)",
      },
    },
  },
  plugins: [],
};
