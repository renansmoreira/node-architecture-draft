const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules
      .filter(rule => rule.test && rule.test.toString().indexOf('tsx') > 0)
      .forEach(rule => {
        rule.include.push(path.join(__dirname, '..', 'domain'));
        rule.include.push(path.join(__dirname, '..', 'infra'));
      });
    
    return config
  },
};
