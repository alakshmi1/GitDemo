describe('Protractor Demo App', function() {
  
    var obj = require("./PageObjectMechanism.js");
    var obj1 = require("./DatadrivenFile.js");
    var using = require('jasmine-data-provider');
    //setup function; It runs before each spec
      beforeAll(function() 
      {
        obj.getURL();
      });
      using(obj1.Datadriven, function (data, description)
      //Here 'data' parameter stores actual data and 'description' parameter stores the sub-object name 
      {
        it('add two numbers and display the result:'+description, function() 
      {
        
        obj.firstNum.sendKeys(data.firstInput);
        obj.secondNum.sendKeys(data.secondInput);
  
        obj.goButton.click();
        
        //Locating the result using css ----> Syntax: by.css("tagname[attribute='value']")
  
        //Comparing expected and actual result using Jasmine Assertions - Syntax: expect(true).toBe(true)
        //Reference: https://jasmine.github.io/2.0/introduction
        expect(obj.result.getText()).toBe(data.result); //Jasmine takes care of resolving promises
        
        obj.result.getText().then(function(num) //Resolving the promise
        {
            console.log("Answer:"+num);
        });
  
      });

      });
      //teardown function; this runs after each spec
      afterAll(function() 
      {
         browser.close();
         console.log("Test is Successfully completed...");
      });

      
    });