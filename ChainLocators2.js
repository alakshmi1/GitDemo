describe('Protractor Demo App', function() 
{
    it('Chain Locators', function() 
    {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(100);
      //element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
      element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
      element(by.model('second')).sendKeys(20);
      
      element(by.id('gobutton')).click();
      element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(num)
      {
          console.log("Result:"+num);
      })

    });
});    
