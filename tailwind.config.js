module.exports = {
  // set the jit to true to enable the JIT compiler
  // this is recommended for production
  jit: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    // tailwind typography
    require('@tailwindcss/typography'),
  ],
}
