// Minimal flat config; lint via `next lint` which auto-applies its own rules.
const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
];

export default eslintConfig;
