describe('calcSpec', function() {
  beforeEach(module('happyOrSad'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('mainController', {
      $scope: scope
    });
  }));

  describe('it should have the relevant information to make the calculations', function(){
  	it('has a list of sad words as specified in the brief', function() {
			expect(scope.calc.sadWords.length).toEqual(5);
		});

		it('has a list of happy words as specified in the brief', function() {
			expect(scope.calc.happyWords.length).toEqual(9);
		});
  });

  describe('it can calculate counts of different words', function() {
  	it('knows how many times an array of text includes a particular happy or sad word', function() {
  		expect(scope.calc.individualWordCount(["happy", "happy", "delighted"], "happy")).toEqual(2);
  	});

  	it('can work out the total of all happy or sad words in a text', function() {
  		expect(scope.calc.totalWordCount(["sad", "sorrow", "unhappy", "happy"], scope.calc.sadWords)).toEqual(3);
  	});
  });

  describe('can tell whether the text is happy or sad', function() {
    it('can tell if a text has 50% more happy than sad words', function() {
      expect(scope.calc.happyOrSad(["sad", "delight", "happy", "delighted"])).toEqual("Happy");
    });

    it('can tell if a text has 50% more sad than happy words', function() {
      expect(scope.calc.happyOrSad(["sad", "sorrow", "miserable", "sorrow", "happy", "delighted"])).toEqual("Sad");
    });

    it('can tell when it doesnt meet either criteria', function() {
      expect(scope.calc.happyOrSad(["sad", "sorrow", "happy", "delighted"])).toEqual("Unknown");
    });

    it('can tell us if a text is happy', function() {
      expect(scope.calc.isHappy(["sad", "delight", "happy", "delighted"])).toBe(true);
    });

    it('can tell us if a text is sad', function() {
      expect(scope.calc.isSad(["sad", "sorrow", "unhappy", "happy"])).toBe(true);
    });
  });
});