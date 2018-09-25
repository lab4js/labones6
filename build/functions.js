"use strict";

/*******************ES6 Tuts**************************/

/*********Default Parameter************/
function foo() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'www.wikipedia.com';
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Welcome to wikipedia';
  console.log("Argument with Default Parameter Url =" + url);
  console.log("Argument with Default Parameter message =" + message);
}

foo(); //Default parameters  will  be used

foo('www.es6.co', 'hi welcome to  default param');