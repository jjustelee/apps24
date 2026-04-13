import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "eslint.config.mjs",
      "next.config.mjs",
    ],
  },
  ...coreWebVitals,
  ...typescript,
];
