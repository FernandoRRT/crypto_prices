module.exports = {
  mode: 'jit',
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: '#000032',
        bgsecondary: '#AA69FF',
        txprimary: '#212529',
        txsecondary: '#F1FFFF',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
