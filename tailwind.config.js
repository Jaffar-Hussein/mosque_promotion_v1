/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    colors: {
      'accentBase': {
        DEFAULT: 'hsl(136, 50.0%, 98.9%)',
        dark: '#0e7490',
      },
      'accentBgSubtle': {
        DEFAULT: 'hsl(138, 62.5%, 96.9%)',
        dark: '#0e7490',
      },
      'accentBg': {
        DEFAULT: 'hsl(139, 55.2%, 94.5%)',
        dark: '#0e7490',
      },
      'accentBgHover': {
        DEFAULT: 'hsl(140, 48.7%, 91.0%)',
        dark: '#0e7490',
      },
      'accentBgActive': {
        DEFAULT: 'hsl(141, 43.7%, 86.0%)',
        dark: '#0e7490',
      },
      'accentLine': {
        DEFAULT: 'hsl(143, 40.3%, 79.0%)',
        dark: '#0e7490',
      },
      'accentBorder': {
        DEFAULT: 'hsl(146, 38.5%, 69.0%)',
        dark: '#0e7490',
      },
      'accentBorderHover': {
        DEFAULT: 'hsl(151, 40.2%, 54.1%)',
        dark: '#0e7490',
      },
      'accentSolid': {
        DEFAULT: 'hsl(151, 55.0%, 41.5%)',
        dark: '#0e7490',
      },
      'accentSolidHover': {
        DEFAULT: 'hsl(152, 57.5%, 37.6%)',
        dark: '#0e7490',
      },
      'accentText': {
        DEFAULT: 'hsl(153, 67.0%, 28.5%)',
        dark: '#be123c',
      },
      'accentTextContrast': {
        DEFAULT: 'hsl(155, 40.0%, 14.0%)',
        dark: '#0e7490',
      },
     
    },
    extend: {},
  },
  plugins: [],
}
