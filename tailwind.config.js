/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { left: "-100%", display: 'none' },
          "100%": { left: "0%", display: 'block' },
        },
        slideOut: {
          "0%": { left: "0%", display: 'block' },
          '100%': { left: "-100%", display: 'none' },
        }
      },
    
      animation: {
        slideIn: "slideIn 0.3s ease-out forwards",
        slideOut: "slideOut 0.3s ease-out forwards",
      }
    },
  },
  plugins: [],
}

