# Happy or Sad

### An Angular app to evaluate your text and tell you if it's happy or sad!

To run the app, open the root directory, and type into console: 

`npm install`

`./node_modules/http-server/bin/http-server ./ -p 8080`

Browse to `http://localhost:8080/app/`

Type in your text to be evaluated on the basis of the given happy and sad words, and see whether what you're saying is Happy, Sad or Unknown.


To run the tests type into console:

`grunt test`

This should run both unit and feature tests, please allow Selenium to open the browser and run the tests in full before returning to console. 

Technologies
------------
* JavaScript
* AngularJS
* Karma
* Protractor

My Approach
-----------

I started by thinking about the different elements that would need to make up this app and how these might be seperated. I intially thought about coding the app in Ruby as this is the language I am most comfortable with, but I wanted an interface which would update dynamically when the user was typing, so I decided it would be much more straight forward in the long run to use Angular. I had also just started to learn this framework so saw it as a further learning experience to try and understand Angular testing frameworks more fully.

I have seperated my business logic into 2 services, which effectively equate to classes.	





