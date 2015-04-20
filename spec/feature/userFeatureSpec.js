describe('user visiting the homepage: ', function(){

	var ptor

	beforeEach(function(){
		browser.get('/');
	});

	it('can see the page title', function(){
		expect(browser.getTitle()).toEqual('Happy or Sad?');
	});

	it('can input some text', function(){
		element(by.css('.text')).sendKeys('some text here\n');
	});

	it('can see the word Happy when the text is happy', function(){
		element(by.css('.text')).sendKeys('happy days this is wonderful');
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Happy');	
		});
	});

	it('can see the word Sad when the text is sad', function(){
		element(by.css('.text')).sendKeys("I'm so miserable this is sad not happy");
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Sad');	
		});
	});
});