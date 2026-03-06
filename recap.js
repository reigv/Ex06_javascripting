// 1st ---> npm init -y
// create .js file
// to run the file ---> node app.js


// recap const --> no change in value
// let --> change in value
// loosely typed language --> javaScript is a loosely typed language, 
//                              which means you don't have to declare the type of a variable. 
//                              The type is determined at runtime based on the value assigned to it.

// basic func 
// typeof() --> to check the type of variable
// console.log() --> to print something in the console
// .length --> to get the length of a string or array

// array --> collection of data
// push() --> to add an element to the end of an array
// pop() --> to remove the last element from an array
// shift() --> to remove the first element from an array
// splice() --> to add/remove elements from an array at a specific index

// comparison operators --> ==, ===, !=, !==, >, <, >=, <=
// === --> strict equality operator, checks for both value and type
// example: 5 === '5' --> false
// == --> loose equality operator, checks for value only, performs type coercion if necessary
// example: 5 == '5' --> true


// C style for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }
// example:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for of loop --> used to iterate over iterable objects like arrays, strings, etc.
// for (const element of iterable) {
//     // code to be executed
// }
// example:
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }