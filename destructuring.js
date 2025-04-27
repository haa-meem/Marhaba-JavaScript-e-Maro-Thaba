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