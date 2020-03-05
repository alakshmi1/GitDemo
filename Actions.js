describe('Actions Demo', function() {
    it('Handling Autocomplete dropdown', function() 
    {
      browser.get('https://fonts.adobe.com/');
      browser.actions().mouseMove(element(by.model('adobeFontsAutoCompleteCtrl.searchTerm')).sendKeys("times")).perform();
      browser.sleep(3000);
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
      browser.actions().sendKeys(protractor.Key.ENTER).perform();

    });
  });