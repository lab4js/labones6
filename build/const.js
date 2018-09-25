"use strict";

/* ******************ES6 Tuts************************* */
//Example - 1.0.0
var value = 'blue';

function blockScopeConst(condition) {
  if (condition) {
    return value;
  } else {
    return null;
  }
}
/******************** Tips********************************/
//Bindings declared using const are considered constants, meaning their values cannot be changed once set.
//every const binding must be initialized on declaration,

/******************** Tips********************************/


console.log(blockScopeConst(true)); //Example - 1.1.0

function letConst(condition) {
  if (condition) {
    var _value = 'green';
    return _value;
  } else {
    return value;
  }
}

console.log("let value = " + letConst(true));
console.log("const value = " + letConst(false)); //Example - 1.2.0

function letvarConst(condition) {
  var value = 'red';

  if (condition) {
    var _value2 = 'green';
    return _value2;
  } else {
    return value;
  }
}

console.log("let value = " + letvarConst(true));
console.log("var value = " + letvarConst(false));
console.log("const value = " + value);
/**************ERROR THROWS SYNTAX***********************/
//Example 1.3.0
//var message = "Hello!";
//let age = 25;
// each of these throws an error also will  not compile
//const message = "Goodbye!";
//const age = 30;
//Example 1.3.1
//const maxItems = 5;
// throws an error
//maxItems = 6;

/***********************Object  Declaration with  const*/

/*

const person = {
name: "Nicholas"
};
// works
person.name = "Greg";
// throws an error
person = {
name: "Greg"
};

*/

/*****ES6 output */
//blue
//const.js:35 let value = green
//const.js:37 const value = blue
//const.js:53 let value = green
//const.js:55 var value = red
//const.js:57 const value = blue

/*****ES5 output */
//blue
//const.js:35 let value = green
//const.js:37 const value = blue
//const.js:53 let value = green
//const.js:55 var value = red
//const.js:57 const value = blue