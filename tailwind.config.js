module.exports = {
  // set the jit to true to enable the JIT compiler
  // this is recommended for production
  jit: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // tailwind typography
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
