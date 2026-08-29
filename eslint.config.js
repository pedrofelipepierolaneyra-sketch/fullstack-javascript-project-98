import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  js.configs.recommended,
];