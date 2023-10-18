// https://nextjs.org/docs/basic-features/eslint#lint-staged

import path from "path";

const buildEslintCommand = (filename) =>
  `next lint --fix --file ${filename.map((f) => path.relative(process.cwd(), f)).join(" --file")}`;

export default {
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": [buildEslintCommand],
  "*.*": "prettier --write --ignore-unknown",
};
