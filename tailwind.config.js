/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          700: 'rgb(0, 0, 160)',
          800: 'rgb(0, 0, 128)',
          900: 'rgb(0, 0, 100)',
        },
        'aliceblue': '#f0f8ff',
      },
    },
  },
  plugins: [],
};
