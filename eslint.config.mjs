import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "no-multiple-empty-lines": ["error", { max: 1 }], // Usuwanie nadmiarowych pustych linii
      indent: ["error", 2], // Ustal wcięcia na 2 spacje
      "eol-last": ["error", "always"], // Nowa linia na końcu pliku
      "no-trailing-spaces": "error", // Usuwanie spacji na końcu linii
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
