describe('Handling Alerts',function() {  

    it('Alerts in non angular site',function() {
    
    browser.waitForAngularEnabled(false);
    browser.get('https://rahulshettyacademy.com/AutomationPractice/');
    browser.manage().window().maximize();
    element(by.id("confirmbtn")).click();
    browser.sleep(5000);
    
    browser.switchTo().alert().dismiss();
    element(by.buttonText('Home')).click();
    browser.sleep(5000);
    
    })

    it('closing the browser', function()
    {
        browser.close();
    })
    
    
})
     
    
    
    
    
    
    //browser.get() will hit url on the browser
    // write your raw protractor code
    
    //Each it block will be called as a spec
    
    
   