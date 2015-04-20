describe('userInputSpec', function() {
  beforeEach(module('happyOrSad'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('mainController', {
      $scope: scope
    });
  }));

	it('should define a body of text', function() {
		expect(scope.getUserInput.text).toBeDefined;
	});

	it('can accept input of text and store it', function() {
		scope.getUserInput.add("I am text");
		expect(scope.getUserInput.text).toEqual("I am text");
	});

	it('should be able to remove punctuation and any left over double spaces from the text', function() {
		expect(scope.getUserInput.removePunctuation("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation")).toEqual("This is an example of a string with punctuation");
	});

	it('should be able to make the text downcase', function() {
		expect(scope.getUserInput.makeLowercase("IM VERY ANGRY")).toEqual("im very angry");
	});

	it("can output a version of text split into an array", function() {
		expect(scope.getUserInput.outputText("im me")).toEqual(["im", "me"]);
	});

	it("can make a standardized version of the text both lowercase, without punctuation and in an array", function() {
		expect(scope.getUserInput.standardizeText("I'm Slightly ANGRY!")).toEqual(["im", "slightly", "angry"]);
	});

	it("can accept input of text, standardize and store it", function() {
		scope.getUserInput.addStandardizedText("I'm Slightly ANGRY!");
		expect(scope.getUserInput.text).toEqual(['im', 'slightly', 'angry']);
	});
});