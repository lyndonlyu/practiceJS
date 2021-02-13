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
*/

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