/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paypal: {
          50: '#f0f9ff',
          100: '#e0f1fe',
          200: '#b9e4fe',
          300: '#7ccffd',
          400: '#36b8fa',
          500: '#0c9feb',
          600: '#0079c1',
          700: '#0164a3',
          800: '#065586',
          900: '#0b476f',
          950: '#072d4a',
        },
      },
    },
  },
  plugins: [],
}
