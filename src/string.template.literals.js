/*******************ES6 Tuts**************************/

/*****Template Literals ****************/


/*Basic Syntax*/

let templateString = `hello template literals`;
console.log(templateString);

let multiline = `hello 
multiline 
literals`;
console.log(multiline)

console.log(`string interpolation basic syntax:- ${templateString}`);

let num1 = 10;
let num2 = 10;
console.log(`string interpolation expressions:- ${2*(num1+num2)}`);

//console.log(`string interpolation function:- ${fn()}`); //This wiil  not work  as fn() is declared  with let hoisting  won't work

let fn = function() {
    return 'hi ES6';
}

console.log(`string interpolation function:- ${fn()}`);

/**Tagged Template Literals **/


let tag = function(literals, subs) {
    console.log("literals" + literals);
    console.log('substitution' + subs)
}
let color = 'red'
let message = tag `Tagged Template example: my favourite color ${color}`;