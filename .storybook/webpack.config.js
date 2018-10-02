// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const paths = require('../config/paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
    fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[local]'
          }
        },
      'sass-loader'
      ]
    }))
  });

  defaultConfig.module.rules.push({
    test: /.(png|woff|woff2|eot|tff|svg)$/,
    loader: 'url-loader?limit=100000'
  })

  defaultConfig.plugins.push(
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true})
  )

  return defaultConfig;
};
