module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  extends: ["airbnb"],
  // globals: {
  //   Atomics: "readonly",
  //   SharedArrayBuffer: "readonly"
  // },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: "module"
  // },
  plugins: ["react-hooks"],
  rules: {}
};
