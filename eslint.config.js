import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const nextConfigs = compat.extends('next/core-web-vitals', 'next/typescript');
const storybookConfigs = storybook.configs['flat/recommended'];

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'out/**',
      'next-env.d.ts'
    ]
  },

  ...nextConfigs,
  ...storybookConfigs,

  {
    files: [
      '*.ts',
      '*.tsx',
      '*.js',
      '*.cjs',
      '*.mjs',
      '.storybook/**/*.ts',
      '*.config.ts',
      '*.config.js',
      'vitest.setup.ts'
    ],
    languageOptions: { parser: tseslint.parser },
    plugins: { prettier },
    rules: { 'prettier/prettier': 'error' }
  }
];

export default eslintConfig;
