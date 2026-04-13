import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
  {
    rules: {
      'no-console': 'warn',
    },
  },
]);

export default eslintConfig;
