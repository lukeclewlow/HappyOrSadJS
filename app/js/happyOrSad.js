var app = angular.module('happyOrSad', []);

app.controller('mainController', ['$scope', 'getUserInput', 'calc', function($scope, getUserInput, calc){
	self = $scope
	self.getUserInput = getUserInput;
	self.calc = calc;
}]);

app.service('getUserInput', function(){
	var self = this;
	self.text;

	self.add = function(text){
		self.text = text;
	};

	self.addStandardizedText = function(text){
		self.text = self.standardizeText(text);
	};

	self.removePunctuation = function(text){
		return text.replace(/[\.,'-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
	};

	self.makeLowercase = function(text){
		return text.toLowerCase();
	};

	self.outputText = function(text){
		return text.split(" ");
	};

	self.standardizeText = function(text){
		return self.outputText(self.removePunctuation(self.makeLowercase(text)));
	};
});

app.service('calc', function(){
	var self = this;
	self.sadWords = ["disappointed", "miserable", "sad", "sorrow", "unhappy"];
	self.happyWords = ["delight", "delighted", "delightful", "happy", "glad", "joy", "joyful", "merry", "pleasant"]

	self.individualWordCount = function(text, identifier){
		var count = 0;
		_.each(text, function(word){
			if(word == identifier) count++;
		});
		return count
	};

	self.totalWordCount = function(text, listOfWords){
		var totalCount = 0;
		_.each(listOfWords, function(word){
			totalCount = totalCount + self.individualWordCount(text, word);
		});
		return totalCount;
	};

	self.happyOrSad = function(text){
		if(self.totalWordCount(text, self.happyWords) == self.totalWordCount(text, self.sadWords)) {
			return "Unknown";
		}
		else if(self.totalWordCount(text, self.happyWords) >= (self.totalWordCount(text, self.sadWords)*1.5)) {
			return "Happy";
		}
		else if(self.totalWordCount(text, self.sadWords) >= (self.totalWordCount(text, self.happyWords)*1.5)) {
			return "Sad";
		}
		else { return "Unknown" };
	};

	self.isHappy = function(text){
		if(self.happyOrSad(text) == "Happy"){
			return true;
		};
	};

	self.isSad = function(text){
		if(self.happyOrSad(text) == "Sad"){
			return true;
		};
	};

	self.ratio = function(text){
		return self.totalWordCount(text, self.happyWords) / (self.totalWordCount(text, self.sadWords)+self.totalWordCount(text, self.happyWords))
	};
});