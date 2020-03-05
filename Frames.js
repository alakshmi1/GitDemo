describe('Handling Frames',function() {  

    it('Frames in non angular site',function() {
    
    browser.waitForAngularEnabled(false);
    browser.get('https://rahulshettyacademy.com/AutomationPractice/');
    browser.manage().window().maximize();
    browser.switchTo().frame(element(by.id('courses-iframe')).getWebElement());
    //browser.switchTo().frame(0); ----> Switching to the frame using its index
    element(by.css("a[href*='sign_in']")).getText().then(function(text)
    {
        console.log(text);
    });
    element(by.css("a[href='#/contact-us']")).getText().then(function(text)
    {
        console.log(text);
    });
    element(by.css("a[href='#/contact-us']")).getLocation().then(function(locationPoints)
    {
        console.log("X Coordinate:"+locationPoints.x);
        console.log("Y Coordinate:"+locationPoints.y);
    });

   /* browser.actions().mouseMove(element(by.css("a[href='#/contact-us']")).click()).perform();
    element(by.tagName('h4')).getText().then(function(text)
    {
        console.log(text);
    })*/
    
    })

    it('closing the browser', function()
    {
        browser.close();
    })
    
    
})
     
    
   