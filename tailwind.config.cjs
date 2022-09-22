/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#070724',
        'secondary-bg': '#419EBB',
        'tertiary-bg': '#38384F',
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'main-bg':
          "url('/home/christian/Desktop/Kosmos/kosmos/public/assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
}
