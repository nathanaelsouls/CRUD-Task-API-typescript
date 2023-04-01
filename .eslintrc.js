module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  plubings: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommende',
    'prettier/@typescrpt-eslint',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
