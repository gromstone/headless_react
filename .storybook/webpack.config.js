// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const paths = require('../config/paths')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: [paths.appSrc, paths.appSrc + '/style'],
    use:[
      require.resolve('style-loader'),
      {
        loader: 'css-loader',
        options: { module: true, importLoaders: 2 },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          includePaths: [paths.src],
        },
      },
    ],
  });
  defaultConfig.resolve.extensions.push('.scss')

  defaultConfig.module.rules.push({
    test: /.(png|woff|woff2|eot|tff|svg)$/,
    loader: 'url-loader?limit=100000'
  })

  return defaultConfig;
};
