/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          navy: {
            DEFAULT: '#0a1931',
            dark: '#060f1f',
            deep: '#081730',
            card: '#0c234a',
            light: '#132f5f',
          },
          red: {
            DEFAULT: '#dc2626',
            hover: '#b91c1c',
            light: '#fef2f2',
            accent: '#e11d48',
          },
          gold: {
            DEFAULT: '#facc15',
            dark: '#eab308',
            amber: '#d97706',
          },
          gray: {
            bg: '#f8fafc',
            soft: '#f1f5f9',
            border: '#e2e8f0',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
