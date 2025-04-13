module.exports = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ],
      '@emotion/babel-preset-css-prop'
    ]
  };
  