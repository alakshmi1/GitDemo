describe('Handling Windows Demo', function()
{
    it('Using WindowHandle', function()
    {
        browser.get('https://angular-open-window.stackblitz.io/');
        element(by.tagName('h1')).getText().then(function(text)
        {
            console.log("Text from parent window:"+text);
        })
        element(by.buttonText('open me!')).click();
       /* browser.getTitle().then(function(title)
        {
            console.log("Title of the parent window:"+title);
        })*/
            browser.getAllWindowHandles().then(function(handles)
            {
                browser.switchTo().window(handles[1]);
                browser.waitForAngularEnabled(false);
                /*browser.getTitle().then(function(title)
                {
                     console.log("Title of the child window:"+title);
                })*/
                element(by.tagName('h2')).getText().then(function(text)
                {
                    console.log("Text from child window:"+text);
                })
                element(by.buttonText('Close me!')).click();
                browser.switchTo().window(handles[0]);  
            })
         
            element(by.tagName('h1')).getText().then(function(text)
            {
                console.log("Text from parent window:"+text);
            })

    })
})