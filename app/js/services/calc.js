var app = angular.module('happyOrSad');

app.service('calc', function() {
	var self = this;
	self.sadWords = ["disappointed", "miserable", "sad", "sorrow", "unhappy"];
	self.happyWords = ["delight", "delighted", "delightful", "happy", "glad", "joy", "joyful", "merry", "pleasant"];

	self.individualWordCount = function(text, identifier) {
		var count = 0;
		_.each(text, function(word) {
			if(word == identifier) count++;
		});
		return count;
	};

	self.totalWordCount = function(text, listOfWords) {
		var totalCount = 0;
		_.each(listOfWords, function(word) {
			totalCount = totalCount + self.individualWordCount(text, word);
		});
		return totalCount;
	};

	self.happyOrSad = function(text) {
		if(self.totalWordCount(text, self.happyWords) == self.totalWordCount(text, self.sadWords)) {
			return "Unknown";
		}
		else if(self.totalWordCount(text, self.happyWords) >= (self.totalWordCount(text, self.sadWords)*1.5)) {
			return "Happy";
		}
		else if(self.totalWordCount(text, self.sadWords) >= (self.totalWordCount(text, self.happyWords)*1.5)) {
			return "Sad";
		}
		else { 
			return "Unknown";
		}
	};

	self.ratio = function(text) {
		return self.totalWordCount(text, self.happyWords) / (self.totalWordCount(text, self.sadWords)+self.totalWordCount(text, self.happyWords));
	};

	self.opacityRatio = function(text){
		if(self.ratio(text) !== self.ratio(text) ) {
			return 0.5;
		}
		else { 
			return self.ratio(text);
		}
	};
});