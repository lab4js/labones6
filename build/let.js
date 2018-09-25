"use strict";

/* ******************ES6 Tuts************************* */
//Example - 1.0.0
function blockScopeLet(condition) {
  if (condition) {
    var value = 'blue';
    return value;
  } else {
    return null; //Value variable will not exist here
  } //Value variable will not exist here

}
/******************** Tips********************************/
//Importance of  block scope  or lexical scope  this helps  in  memory  management by not wasting  memory by  not  creating variables in global scope 

/******************** Tips********************************/


console.log(blockScopeLet(true)); //block  scope  will  work  and variable  value  will  be created

console.log(blockScopeLet(false)); //block scope  not executed and variable value  will  not  be created

/****** No Redeclaration**************/
//We  will  not be able  to  create  same  variablename with  let and  var keyword  unless  let is used  in block scope not in global scope
//example -1.1.0

function noRedeclartion() {
  try {
    var _helloworld = 'hello';
    var _helloworld = 'hello';
    console.log(_helloworld);
  } catch (err) {
    console.log(err);
  }
} //example -1.1.1


function useCaseDeclaration() {
  var helloworld = 'hello';

  try {
    var _helloworld2 = 'Hi';
    console.log('blockScope "let"' + _helloworld2);
  } catch (err) {
    console.log(err);
  }

  console.log('globaScope "var"' + helloworld);
}

useCaseDeclaration();
noRedeclartion();
/**ES6 OutPut ********************/
//let.js:21 blue
//let.js:22 null
//let.js:45 blockScope "let"Hi
//let.js:50 globaScope "var"hello
//let.js:32 Uncaught SyntaxError: Identifier 'helloworld' has already been declared
// at let.js:53

/***********ES5 Output ************/
//blue
//let.js:22 null
//let.js:44 blockScope "let"Hi
//let.js:49 globaScope "var"hello
//let.js:32 hello