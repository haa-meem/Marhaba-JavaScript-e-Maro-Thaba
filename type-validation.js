//Page 298

//1
function firstLetter(first) {
  if (typeof first !== "string") {
    return "Please provide String";
  }
  return first[0];
}
console.log(firstLetter("Haa-meem"));

//2
function lastElement(array) {
  if (Array.isArray(array == false)) {
    return "Please provide an Array";
  }
  return array[array.length - 1];
}
console.log(lastElement([13, 18, 11]));

//3
function getArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    return "Please provide valid input";
  }
  return length * width;
}
console.log(getArea(2, 33));
