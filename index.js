module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        loose: true,
        corejs: 3,
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      },
    ],
    ['@babel/preset-react', { useBuiltIns: true }],
  ],
  plugins: [
    ['module:fast-async', { spec: true }],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['babel-plugin-lodash', {}],
    ['@loadable/babel-plugin', {}],
  ],
  env: {
    development: {
      plugins: [['@babel/plugin-transform-react-constant-elements', {}]],
    },
  },
};
