/*******************ES6 Tuts**************************/

/*********Default Parameter************/
function foo(url = 'www.wikipedia.com', message = 'Welcome to wikipedia') {
    console.log("Argument with Default Parameter Url =" + url);
    console.log("Argument with Default Parameter message =" + message);
}

foo() //Default parameters  will  be used
foo('www.es6.co', 'hi welcome to  default param');