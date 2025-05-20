/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#3498db',
        accent: '#e74c3c',
        light: '#ecf0f1',
        dark: '#121212',
      },
    },
  },
  plugins: [],
}
