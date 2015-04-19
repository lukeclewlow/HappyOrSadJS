// An example configuration file.
exports.config = {
  directConnect: true,
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  baseUrl: 'http://localhost:8080/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./spec/feature/userFeatureSpec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
