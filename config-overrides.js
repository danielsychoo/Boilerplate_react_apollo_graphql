const addSassLoader = require('react-app-rewire-scss-loaders');

module.exports = function override(config, env) {
  config = addSassLoader('sass-loader', {
    additionalData: `@import './src/assets/styles/utils.scss';`,
  })(config, env);

  return config;
};
