module.exports = {
  // set the jit to true to enable the JIT compiler
  // this is recommended for production
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // tailwind typography
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
