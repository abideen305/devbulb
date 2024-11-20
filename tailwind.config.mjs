/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'devbulb-orange': '#FF6B00',
        'devbulb-blue': '#0A1E3D'
      }
    }
  },
  plugins: []
}