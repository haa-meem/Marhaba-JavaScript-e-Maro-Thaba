//Page 224

//1
const numbers = [11, 13, 7, 9, 4, 99, 2001];
const aboveCentury = numbers.some(number => number > 100);
console.log(aboveCentury);

//2
const dividedByFive = [11, 13, 7, 9, 4, 100, 2001].every(num => num % 5 === 0);
console.log(dividedByFive);

//3
const words = ["hola", "arigato", "hello"];
const equalHello = words.some(word => word === "hello");
console.log(equalHello);