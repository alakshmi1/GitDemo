describe('Protractor Demo App', function() 
{
  function write(num1,num2)
  { 
    element(by.model('first')).sendKeys(num1);
    element(by.model('second')).sendKeys(num2);
   //element(by.id('gobutton')).click();
  }
 //Performing all the operations in the dropdown for two numbers
  function calc(a,b)
  {
    element.all(by.tagName('option')).each(function(item)
      {
        write(a,b);
        item.click();
        element(by.id('gobutton')).click();     
      })   
  }

  function Calculate(a,b,operator)
  {
    write(a,b);
    element.all(by.tagName('option')).each(function(item)
      {
        //Retrieving each value from the dropdown using getAttribute
        item.getAttribute('value').then(function(values)
        {
            if(operator==values)
            {
                item.click();
               
            }
        })
      }) 
      element(by.id('gobutton')).click();
  }
   
  it('Handling dropdown using All', function() 
    {
      browser.get('http://juliemr.github.io/protractor-demo/');

      /* write(10,20);
       write(30,5);
       write(20,40);*/
    
    //Iterating through each of the options in the dropdown
      console.log("Values in the dropdown:");
      element.all(by.tagName('option')).each(function(item)
      {
        //Retrieving each value from the dropdown using getAttribute
        item.getAttribute('value').then(function(values)
        {
            console.log(values);
        })
      }) 
      
      calc(10,5);
      Calculate(6,3,"MULTIPLICATION");
      Calculate(6,3,"DIVISION");
      Calculate(6,3,"SUBTRACTION");
      Calculate(6,3,"MODULO");
      Calculate(6,3,"ADDITION");
      element.all(by.repeater('result in memory')).each(function(item)
      {
        item.element(by.css('td:nth-child(3)')).getText().then(function(num)
        {
            console.log("Result:"+num);
        })
      })
      
    });
});    