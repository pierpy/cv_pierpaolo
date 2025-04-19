/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',        // l’Angular template compiler
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--md-sys-color-primary)',   // se vuoi re‑usare il tema Material 3
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
