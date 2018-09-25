"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Tagged Template example: my favourite color ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*******************ES6 Tuts**************************/

/*****Template Literals ****************/

/*Basic Syntax*/
var templateString = "hello template literals";
console.log(templateString);
var multiline = "hello \nmultiline \nliterals";
console.log(multiline);
console.log("string interpolation basic syntax:- ".concat(templateString));
var num1 = 10;
var num2 = 10;
console.log("string interpolation expressions:- ".concat(2 * (num1 + num2))); //console.log(`string interpolation function:- ${fn()}`); //This wiil  not work  as fn() is declared  with let hoisting  won't work

var fn = function fn() {
  return 'hi ES6';
};

console.log("string interpolation function:- ".concat(fn()));
/**Tagged Template Literals **/

var tag = function tag(literals, subs) {
  console.log("literals" + literals);
  console.log('substitution' + subs);
};

var color = 'red';
var message = tag(_templateObject(), color);