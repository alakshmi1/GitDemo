describe('Practise Ecom Website', function() {

    function selectItem(product)
    {
        element.all(by.tagName('app-card')).each(function(item)
        {
            item.element(by.css("h4 a")).getText().then(function(text)
            {
                if(text == product )
                {
                    item.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })
    }
    it('Adding items to the cart', function() {
        browser.get('https://rahulshettyacademy.com/angularpractice/');
        element(by.linkText('Shop')).click();
        selectItem("Samsung Note 8");
        selectItem("iphone X");
        element(by.partialLinkText('Checkout')).getText().then(function(text)
        {
           //expect(text.slice(11,12)).toBe("2"); //Checkout ( 2 ) ---> Position is counted from 0
          var res = text.split("(");  //split() converts a string into an array
          var num = res[1].trim().charAt(0); //Returns a string value for the number of items in the cart
          var numOfItems = parseInt(num); //Converting string to integer
          expect(numOfItems).toEqual(2);
          console.log("No. of items in the cart: "+numOfItems);
        })
    });
    /*it('Checkout Page', function()
    {
        element(by.partialLinkText('Checkout')).click();
        var totalPrice = 0;
        element.all(by.tagName('tr')).each(function(item)
        {
            item.element(by.css('td:nth-child(1)')).element(by.css("h5[class='media-heading']")).getText().then(function(text)
            {
                if(text==" by ")
                {
                item.element(by.css('td:nth-child(4)')).getText().then(function(text)
                {
                var price = text.split(".");
                var priceOfEachItem = price[1].trim();
                var actualPrice = parseInt(priceOfEachItem);
                
                totalPrice = totalPrice + priceOfEachItem;
                console.log(totalPrice);
                })
            }
          })
        })
        //expect(totalPrice).toEqual()
    })*/
  });