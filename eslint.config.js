import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      'plugin:@next/next/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    rules: {
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
];
