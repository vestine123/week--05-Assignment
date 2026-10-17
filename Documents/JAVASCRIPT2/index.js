// data types

// 1 string
// 2 number
// 3 boolean
// 4 null
// 5 undefined
// 6 bigint
// 7 symbol
// 8 object
// 9 arrays
// 10 function
// 11 date
// 12 regex

// declaration of variables

// let
// const
// var

// variable and value

// variable is a an element that is used to store data in memory in javascript
// value is the data that is stored in memory in javascript

// let  can be declared once and update

let name = "John";
name = "Doe"; // These is accaptable because we are updating the value of the variable name and its done with let

// const can be declared once and not updateble

const userName = "Hassan"; // can be declared once but never updatable

var names = "Ali";
names = "Ian";
var names = "Ahmed";
var names = "Hassan";

// console.log(names);

// global scop

function globalScope() {
  console.log(name);
}

globalScope();

// local scope (function scope)

function localScope() {
  let name = "Ali";
  console.log(name);
}

localScope();

// Block scope

if (true) {
  let blockLet = "I am trapped here";
  var leakedVar = "I escaped the block!";
  console.log(blockLet);
}

console.log(leakedVar); 

// tdz (temporol dead zone) 

console.log(test)
var test = "I am in the tdz";
console.log(test)


{
    const userName = "Hassan"; // camelcase
}

const quote = "She said \"Muraho\""; 

console.log(quote);

const path = "C:\\coding\\week05";

console.log(path)

const twoLines = "First\nSecond";  

console.log(twoLines);

console.log(10 / 0);  