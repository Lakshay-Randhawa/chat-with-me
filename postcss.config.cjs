module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: "#root",
};
