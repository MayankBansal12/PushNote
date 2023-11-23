/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        title: ["Tourney", "sans-serif"],
        brush: ["Comforter Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
