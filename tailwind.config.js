module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],  // for readability and modern look
        'secondary': ['Cinzel, serif']        // for headings and a more fantasy feel
      },
      colors: {
        // Alliance Colors
        'background': '#1a1a1a',        // very dark grey
        'primary-text': '#f5f5f5',      // almost white
        'secondary-text': '#a0a0a0',    // light grey
        'highlight': '#ffd700',         // gold, for highlights and important elements
        'accent': '#007bff',            // blue, for buttons and interactive elements
      }
    },
  },
  plugins: [],
};