describe('Working on non Angular Apps', function()
{
    it('Opening google home page', function()
    {
        //turning off waiting for Angular page load
        browser.waitForAngularEnabled(false);
        browser.get('http://google.com/');

    })
})