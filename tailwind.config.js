/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navyblue: "#343D68",
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'typing': 'typing 2s steps(20) infinite',
        'typing-2': 'typing 2s steps(20) 0.5s infinite',
        'typing-3': 'typing 2s steps(20) 1s infinite'
      }
    },
  },
  plugins: [],
};
