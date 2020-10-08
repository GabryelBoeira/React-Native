module.exports = {
  root: true,
  extends: ['react-app'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    indent: 'true',
    'react/jsx-indent': 'off',
    'prettier/prettier': 'error',
    'react/jsx-indent-props': 'off',
  },
};
