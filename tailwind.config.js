/** @type {import('tailwindcss').Config} */

const colors =
  '(red|orange|yellow|green|teal|blue|violet|purple|pink|gray|black)';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: new RegExp(`border-r-${colors}.*`),
    },
    {
      pattern: /w-.*/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
