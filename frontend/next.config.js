const withOffline = require('next-offline');

const nextSettings = {
  optimizeFonts: false,
  // disable eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Change your site title here
  env: {
    title: 'PoupaObra',
    titleDescription: 'PoupaObra Marketplace',
  },
};

module.exports = withOffline(nextSettings);
