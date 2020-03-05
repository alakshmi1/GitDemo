describe('Protractor Demo App', function() {
  
  var obj = require("./PageObjectMechanism.js");
  var obj1 = require("./ParametersPassing.js");
  
  //setup function; It runs before each spec
    beforeEach(function() 
    {
      obj.getURL();
    });

    it('add two numbers and display the result', function() 
    {
      
      obj.firstNum.sendKeys(obj1.parameters.firstInput);
      obj.secondNum.sendKeys(obj1.parameters.secondInput);

      obj.goButton.click();
      
      //Locating the result using css ----> Syntax: by.css("tagname[attribute='value']")

      //Comparing expected and actual result using Jasmine Assertions - Syntax: expect(true).toBe(true)
      //Reference: https://jasmine.github.io/2.0/introduction
      expect(obj.result.getText()).toBe(obj1.parameters.result); //Jasmine takes care of resolving promises
      
      obj.result.getText().then(function(num) //Resolving the promise
      {
          console.log("Answer:"+num);
      });

    });

    //teardown function; this runs after each spec
    afterEach(function() 
    {
       browser.close();
       console.log("Test is Successfully completed...");
    });
  });