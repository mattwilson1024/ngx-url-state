const baseConfig = require('../../jest.base.config');
module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    'ngx-url-state': '<rootDir>/../ngx-url-state/src/public-api'
  }
};
