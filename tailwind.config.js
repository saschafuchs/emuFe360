const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,ts}'],
  safelist: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}
