//Page 202

//1
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { brand } = product;
console.log(brand);

//2
const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone, price } = item;
console.log(phone, price);

//3
const colors = ["red", "blue", "green", "yellow"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

//4
const numbers = [13, 7, 2001];
const [, second,] = numbers;
console.log(second);

//5
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight);

//6
function multiply(a, b) {
    return [a * 3, b * 3];
}
const [firstResult, secondResult] = multiply(13, 7);
console.log(firstResult, secondResult);

//7
const person = { name2: "Rahim", city: "Dhaka" };
const { name2, city, phone2 = "N/A" } = person;    //name and phone property is duplicate
console.log(name2, city, phone2);

//8
const teacher = { name3: "Maria", profession: "Teacher" };
const { name3, profession: job } = teacher;    //name property is duplicate
console.log(name3, job);