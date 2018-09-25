/* ******************ES6 Tuts************************* */

///Unicode  Point Characters
/*ES5 --> */
console.log('ES5 Unicode Character Denotation' + '\uD83D\uDE80'); //prints rocket  character in console

/*ES6--> */

console.log('\u{1F680}');

/***ES6 Methods *****/

/***String.fromCharCode();**/
console.log(String.fromCharCode(189, 43, 190, 61));

/***String.fromCodePoint()**/

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));


/***String.endsWith()**/

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false

/*String.includes()*/

var sentence = 'The quick brown fox jumped over the lazy dog.';

var word = 'fox';

console.log('The word "' + word + (sentence.includes(word) ? '" is' : '" is not') + ' in the sentence');
// expected output: "The word "fox" is in the sentence"

/*String.normalize()*/

var oldWord = 'mañana';
var newWord = oldWord.normalize('NFD');
console.log('The word did ' + ((oldWord != newWord) ? 'not ' : '') + 'change.');
// expected output: "The word did change."


/**String.padEnd()*/

const str3 = 'Breaded Mushrooms';

console.log(str3.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

/** String.padStart()*/

const str4 = '5';

console.log(str4.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

/** String.repeat()*/

var chorus = 'Because I';

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));

/**String.startsWith() */

const str5 = 'Saturday night plans';

console.log(str5.startsWith('Sat'));
// expected output: true

console.log(str5.startsWith('Sat', 3));
// expected output: false