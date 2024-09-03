/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',  // All Vue and JS files in the components directory
    './layouts/**/*.{vue,js}',     // All Vue and JS files in the layouts directory
    './pages/**/*.{vue,js}',       // All Vue and JS files in the pages directory
    './plugins/**/*.{js,ts}',      // All JS and TS files in the plugins directory
    './nuxt.config.{js,ts}',       // Nuxt.js configuration files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
