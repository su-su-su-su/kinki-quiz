import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  { files: ["**/*.js"], languageOptions: { globals: globals.node } },
  js.configs.recommended,
  prettier,
];
