var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter'); 
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Actions.js'],
    //onPrepare is executed before all the specs get executed; 
    //it is like a global pre-requisite for the entire test suite
    onPrepare: function() 
    {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter(
        {
          savePath: './test/reports/'
        })
      );
    },
    suites: {
      smoke: 'Dropdown.js',
      regression: ['HandlingWindows.js','HandlingAlerts.js']
    },
    jasmineNodeOpts: 
    {
      showColors: true, // Use colors in the command line report.
    }

  };