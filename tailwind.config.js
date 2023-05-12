/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /w-.*/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
