//Page 228

//1
const nums = [5, 10, 15, 20, 25];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//2
const products = [{ name: 'shampoo', price: 100 }, { name: 'soap', price: 50 }, { name: 'ttothpaste', price: 75 }];
const totalPrice = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(totalPrice);

//3
const productList = [{ name: 'Pen', price: 5 }, { name: 'Book', price: 50 }, { name: 'Bag', price: 100 }];
const total = productList.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);

//4
const multiplication = [1, 2, 3, 4, 5].reduce((accumulator, current) => accumulator * current, 1);
console.log(multiplication);

//6
const add = [100, 200, 300, 400].reduce((accumulator, current) => accumulator + current, 50);
console.log(add);