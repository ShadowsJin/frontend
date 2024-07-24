module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react-router-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@routes/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@common/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@store/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@hooks/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@lib/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@constants/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@utils/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@assets/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@styles/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    indent: 'off',
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-arguments': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx']},
    react: {
      version: 'detect',
    },
  },
};
