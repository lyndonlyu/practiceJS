/*
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


//let javaScript = true;
//console.log(javaScript);

//the typeof is operator like +,- and the result of typeof operator is a string with he type of the value.

//console.log(typeof true);
console.log(typeof javaScript);
//console.log(typeof 23);
//console.log(typeof "String");

//dynamic typing
javaScript = "Yay!";
console.log(typeof javaScript);


//no value defined, then the type is undefined
let year;
console.log(year);
console.log(typeof year);

//important bug
//it returns object
console.log(typeof null);


//let and const was introduce in ES6 
//the legacy way of declaring variable is using var, prior to ES6

//let variable is mutable
let age = 30;
age = 31;

//const variable is immutable
const birthYear = 1993;

//empty const is illegal
//const birthYear 
//a good practice is declare const at first, be sure to use let when needed


//this would work but!! it does not create variable in the scope, instead Javascript will create a property on the global object.
lastName = "susan";
console.log(lastName);



// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = 'Lyndon';
const lastName = 'Lyu';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);




let massMark = 78;
let heightMark = 1.69;
let massJohn= 92;
let heightJohn = 1.95;

let BMIJohn = massJohn/heightJohn **2;
let BMIMark = massMark/heightMark **2;

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn,BMIMark);
console.log(markHigherBMI);
*/

//template literals
const firstName = 'lyndon';
const job = 'programmer';
const birthYear = 1993;
const year = 2037;

const lyndon = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(lyndon);

const lyndonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(lyndonNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);