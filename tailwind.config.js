/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        small: "450px",
        tablet: "768px",
        desktop: "1024px",
        large: "1280px",
        xlarge: "1536px",
      },
      colors: {
      primary: "#FE5F1B",
      secondary: "#BBA04E",
      hoverColor:'#e54501',
      background: "#fef3ed",
      text: "#ffffff",
      secondaryText:'#000000',
      border: "#DDDDDD",
      },
    },
  },
  plugins: [],
}

