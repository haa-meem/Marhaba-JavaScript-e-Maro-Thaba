//Page 228

//1
const nums = [5, 10, 15, 20, 25];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//2
const products = [{ name: 'shampoo', price: 100 }, { name: 'soap', price: 50 }, { name: 'ttothpaste', price: 75 }];
const totalPrice = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(totalPrice);