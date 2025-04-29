//Page 73

//1
console.log(50 == '50');    //true
console.log(50 === '50');   //false

//2
console.log("JavaScript" == 'JavaScript');   //true
//("") and ('') are the same in JS,the comparison only considers the content inside the quotes

//3
console.log(25 == '25');    //true
console.log(25 === '25');   //false
//== checks only value & ===  checks both value and type in JS

//4
console.log("apple" == "apple");    //true
console.log("apple" === "apple");   //true

//5
console.log("test" == "TEST");    //false
console.log("test" === "TEST");   //false

//6
const variableX = 15, variableY = "20";
console.log(variableX != variableY);    //true
console.log(variableX !== variableY);   //true

//7
const variableA = "hello", variableB = "Hello";
console.log(variableA == variableB);    //false
console.log(variableA === variableB);   //false