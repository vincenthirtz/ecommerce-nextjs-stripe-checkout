const path = require('path')

module.exports = {
  webpack5: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
