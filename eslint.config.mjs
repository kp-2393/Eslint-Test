import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"], // Enforce semicolons
      "no-console": "warn", // Warn about console statements
      "no-use-before-define": "error", // Error if variable is used before it's defined
    }
  }
];
