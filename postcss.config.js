module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-custom-properties'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')
  ]
};
