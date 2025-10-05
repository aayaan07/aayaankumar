/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        softwhite: "#F6F2EC", // your warm white
        softblack: "#2E2E2E"  // your soft black
      }
    }
  },
  plugins: []
}
