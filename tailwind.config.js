/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'midnight-black': '#0b0e14',
        'bg-card': '#40415e',
      },
      backgroundColor: {
        body: '#1B1C31',
        card: '#2C2D4C',
        'midnight-black': '#0b0e14',
        'create-button': '#61DAFA',
        'deep-navy': '#0D0E23'
      },
      boxShadowColor: {
        'create-button': '#61DAFA80'
      }
    },
  },
  plugins: [],
}

