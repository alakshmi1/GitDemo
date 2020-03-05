exports.config = {
    // The address of a running selenium server
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['ElementBasics.js'],
    // Capabilities to be passed to the webdriver instance
    capabilities: {
    'browserName': 'firefox'
  }
};