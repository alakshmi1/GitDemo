describe('Protractor baby steps', function () {
	it('Open Angular js website', function () {
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.sleep(5000).then(function()
		{
			console.log("Hey there");
			console.log("I am the last step in this code");
		})
		
	})

})