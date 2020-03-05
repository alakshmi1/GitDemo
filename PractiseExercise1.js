describe('Practise Ecom Website', function() {
    it('Handling form elements', function() 
    {
      browser.get('https://rahulshettyacademy.com/angularpractice/');
      element(by.css("input[name='name']")).sendKeys("Lakshmi");
      element(by.name('email')).sendKeys("subbuece1@gmail.com");
      element(by.id('exampleInputPassword1')).sendKeys("password");
      element(by.css("input[type='checkbox']")).click();
     //element.all(by.tagName('option')).get(1).click();
      element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
      element.all(by.name('inlineRadioOptions')).first().click();
      element(by.css("input[type='date']")).sendKeys("21081993");
      browser.sleep(5000);
      element(by.buttonText('Submit')).click();
      element(by.css("div[class*='alert-success']")).getText().then(function(text)
      {
          console.log(text);
      })

      //Error message validation
      element(by.css("input[name='name']")).clear();
      element(by.css("input[name='name']")).sendKeys("L").then(function()
        {
            browser.sleep(2000);
            element(by.css("div[class*='alert-danger']")).getText().then(function(text)
            {
                console.log(text);
            })    
        })
     /* element(by.name('email')).clear();
      element(by.id('exampleInputPassword1')).clear();
      element(by.name('email')).getText().then(function(email)
      {
       if(email=="")
        {
          element(by.css("div[class*='alert-danger']")).getText().then(function(text)
          {
            console.log(text);
          })
        }
        else
        {
          console.log(email);
        }
      })*/
      element.all(by.css("div[class*='alert-danger']")).count().then(function(text)
      {
        if(text==0 )
        {
          console.log("Hurray!!!There are no errors..");

        }
        else
        {
          console.log("There are "+text+" error(s) in the page...");
        }
      })
   });
    
    });
  