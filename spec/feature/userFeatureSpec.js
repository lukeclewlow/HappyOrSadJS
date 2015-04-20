describe('user visiting the homepage: ', function() {

	beforeEach(function() {
		browser.get('/app');
	});

	it('can see the page title', function() {
		expect(browser.getTitle()).toEqual('Happy or Sad?');
	});

	it('can input some text', function() {
		element(by.css('.text')).sendKeys('some text here\n');
	});

	it('can see the word Happy when the text is happy', function() {
		element(by.css('.text')).sendKeys('happy days this is wonderful');
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Happy');	
		});
	});

	it('can see the word Sad when the text is sad', function() {
		element(by.css('.text')).sendKeys("I'm so miserable this is sad not happy");
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Sad');
		});
	});

	it('can see the word Unknown when there is no clear outcome', function() {
		element(by.css('.text')).sendKeys("Hi, I'm neither way inclined");
		element(by.css('.result')).getText().then(function(name) {
			expect(name).toBe('Unknown');	
		});
	});

	it('has a picture that is slightly rainy on page load', function() {
		expect(element(by.css('.top')).getCssValue('opacity')).toEqual('0.5');
	});

	it('the picture looks entirely sunny if the ratio for happy is 100%', function() {
		element(by.css('.text')).sendKeys("Happy");
		browser.sleep(1200) 
		expect(element(by.css('.top')).getCssValue('opacity')).toEqual('1');
	});

		it('the picture looks entirely rainy if the ratio for sad is 100%', function() {
		element(by.css('.text')).sendKeys("Sad");
		browser.sleep(2000) 
		expect(element(by.css('.top')).getCssValue('opacity')).toEqual('0');
	});
});