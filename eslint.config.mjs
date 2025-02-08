import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["tailwind.config.mjs"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];

export default eslintConfig;
