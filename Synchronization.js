describe('Protractor Synchronization Demo', function() {
    it('Handling waits in non angular sites', function()
    {
      browser.waitForAngularEnabled(false);
      browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
      element(by.css("a[href*='loadAjax']")).click();
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.invisibilityOf(element(by.id('loader'))),5000);
      //browser.sleep(8000);
      //browser.wait(EC.visibilityOf(element(by.id('results'))),5000);
      element(by.id('results')).getText().then(function(text)
      {
        console.log(text);
      })
    });
  });