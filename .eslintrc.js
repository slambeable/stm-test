module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-rest-params': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',
  },
};
