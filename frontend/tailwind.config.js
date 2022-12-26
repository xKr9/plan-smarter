/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F3FCF0',
        'primary': '#1F271B',
        'secondary': '#EE4266'
      },
      fontFamily: {
        'primary': ['Abril Fatface'],
        'secondary': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
