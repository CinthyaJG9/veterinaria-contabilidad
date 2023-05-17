/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.jsx', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green:
        {
          10: '#6ED4A5'
        }
      }
    }
  },
  plugins: []
};
