//Page 259

//1
const num = 15;
let copy = num;
copy = 25;
console.log(num, copy);

//2
const arr = [1, 2, 3];
const copyArr = arr;
copyArr.push(88);
console.log(arr, copyArr);

//3
const language = { name: "JS", age: 30 };
const newVersion = language;
newVersion.location = "Browser";
console.log(language, newVersion);
