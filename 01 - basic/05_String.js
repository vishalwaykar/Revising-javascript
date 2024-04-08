const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


// String practice:

let myName = new String("Vishal");

// charAt() method:

myName.charAt(5);
// console.log(myName.charAt(0));

// Sample usecase
// if(myName.charAt(0) == "V"){
//     console.log("The name might be Vishal");
// }

// charCodeAt() method :- Returns the Unicode value of the character at the specified location.
myName.charCodeAt(4);

// console.log(myName.charCodeAt(4));


// codePointAt() method :- 
/*
    Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
*/
myName.codePointAt(2);

// console.log(myName.codePointAt(4));

// concat() method: Returns a string that contains the concatenation of two or more strings.
myName.concat();
let myCity = "Ahmednagar";

// console.log(myName.concat('s city is ', myCity));

// myCity.endsWith() method:
/*
 Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
*/
// console.log(myCity.endsWith('nagar'));

// includes method()
/*

        Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

*/
myCity.includes('nagar');

// console.log(myCity.includes('nagar'));

// indexOf:- 
/*
Returns the position of the first occurrence of a substring.

@param searchString — The substring to search for in the string

@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
*/
// console.log(myCity.indexOf('nagar'));//5


//lastIndexOf() method:->
/*
Returns the last occurrence of a substring in the string.

@param searchString — The substring to search for.

@param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
*/
myCity.lastIndexOf("a");

// console.log(myCity.lastIndexOf("a"));

// above the index will be 8 as last letter 'a' is at 8 th position

myCity.localeCompare()
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

