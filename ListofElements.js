describe('Protractor Demo App', function() 
{
  function write(num1,num2)
  { 
    element(by.model('first')).sendKeys(num1);
    element(by.model('second')).sendKeys(num2);
    element(by.id('gobutton')).click();
  }
   
  it('Handling list of Elements', function() 
    {
      browser.get('http://juliemr.github.io/protractor-demo/');

       write(10,20);
       write(30,5);
       write(20,40);

      element.all(by.repeater('result in memory')).count().then(function(noofrows)
      {
          console.log("Total number of rows:"+noofrows);
      })

      //Iterating through each row of the table
      element.all(by.repeater('result in memory')).each(function(item)
      {
        item.element(by.css('td:nth-child(3)')).getText().then(function(num)
        {
            console.log("Result:"+num);
        })
      })
      //To retrieve first element from the list
      element.all(by.repeater('result in memory')).first().element(by.css('td:nth-child(3)')).getText().then(function(firstnum)
      {
            console.log("First result:"+firstnum);
      })

      //To retrieve last element from the list
      element.all(by.repeater('result in memory')).last().element(by.css('td:nth-child(3)')).getText().then(function(lastnum)
      {
            console.log("Last result:"+lastnum);
      })

      //To retrieve nth element from the list using its index
      element.all(by.repeater('result in memory')).get(1).element(by.css('td:nth-child(3)')).getText().then(function(n)
      {
            console.log("Element at index 1:"+n);
      })
      
    });
});    
