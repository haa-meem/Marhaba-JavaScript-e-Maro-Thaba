//Page 266

//1
if (false) {
  console.log(true);
} else {
  console.log(false);
}

//2
const obj = {};
if (obj) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//3
const arr = [];
if (arr) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//4
const newArr = [];
console.log(!!newArr);
