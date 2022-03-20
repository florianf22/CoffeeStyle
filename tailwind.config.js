module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-hero': "url('/images/headerBg.jpeg')",
      },
      colors: {
        primary: '#a25f4b',
        black: '#1d1f2e',
      },
    },
  },
  plugins: [],
};
