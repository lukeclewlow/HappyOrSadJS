var app = angular.module('happyOrSad');

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