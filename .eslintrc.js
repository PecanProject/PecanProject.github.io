module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["react"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "no-bad-internal-links": "error",
  },
};
