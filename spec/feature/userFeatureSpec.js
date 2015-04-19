describe('user visiting the homepage: ', function(){

	var ptor

	beforeEach(function(){
		browser.get('/');
		// ptor = protractor.getInstance();
	});

	it('can see the page title', function(){
		expect(browser.getTitle()).toEqual('Happy or Sad?');
	});

	it('can input some text', function(){
		element(by.css('.text')).sendKeys('some text here\n');
	});

	it('can see the word HappyDays when the text is happy', function(){
		element(by.css('.text')).sendKeys('happy days this is wonderful');
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Happy');	
		});
	});
});