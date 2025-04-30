//Page 209-2010

//1
const technologies = ["Condition", "array", "loop"];
const newArray = ["variable", ...technologies];
console.log(newArray);
console.log(technologies);

//2
const fruits = ["Apple", "Banana", "Mango"];
const allFruits = [...fruits, "papaya", "orange"];
console.log(allFruits);

//3
const frontEnd = ["JavaScript"], backEnd = ["Node.js"], database = ["MongoDB"];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

//4
const website = { name: "MySite", type: "e-commerce", status: "active" };
const updatedWeb = { ...website, theme: "dark" };
console.log(updatedWeb);

//5
const young = { name: "Arif", age: 30, country: "B Baria" };
const { country, ...newObj } = young;
console.log(newObj);