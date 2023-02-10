/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    colors: {
      'accentBase': {
        DEFAULT: 'hsl(136, 50.0%, 98.9%)',
        dark: 'hsl(146, 30.0%, 7.4%)',
      },
      'accentBgSubtle': {
        DEFAULT: 'hsl(138, 62.5%, 96.9%)',
        dark: 'hsl(155, 44.2%, 8.4%)',
      },
      'accentBg': {
        DEFAULT: 'hsl(139, 55.2%, 94.5%)',
        dark: 'hsl(155, 46.7%, 10.9%)',
      },
      'accentBgHover': {
        DEFAULT: 'hsl(140, 48.7%, 91.0%)',
        dark: 'hsl(154, 48.4%, 12.9%)',
      },
      'accentBgActive': {
        DEFAULT: 'hsl(141, 43.7%, 86.0%)',
        dark: 'hsl(154, 49.7%, 14.9%)',
      },
      'accentLine': {
        DEFAULT: 'hsl(143, 40.3%, 79.0%)',
        dark: 'hsl(154, 50.9%, 17.6%)',
      },
      'accentBorder': {
        DEFAULT: 'hsl(146, 38.5%, 69.0%)',
        dark: 'hsl(153, 51.8%, 21.8%)',
      },
      'accentBorderHover': {
        DEFAULT: 'hsl(151, 40.2%, 54.1%)',
        dark: 'hsl(151, 51.7%, 28.4%)',
      },
      'accentSolid': {
        DEFAULT: 'hsl(151, 55.0%, 41.5%)',
        dark: 'hsl(151, 55.0%, 41.5%)',
      },
      'accentSolidHover': {
        DEFAULT: 'hsl(152, 57.5%, 37.6%)',
        dark: 'hsl(151, 49.3%, 46.5%)',
      },
      'accentText': {
        DEFAULT: 'hsl(153, 67.0%, 28.5%)',
        dark: 'hsl(151, 50.0%, 53.2%)',
      },
      'accentTextContrast': {
        DEFAULT: 'hsl(155, 40.0%, 14.0%)',
        dark: 'hsl(137, 72.0%, 94.0%)',
      },
     
    },
    extend: {},
  },
  plugins: [],
}
