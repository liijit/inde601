module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    allowExpressions: 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
