//Page 186

//1
function add(num1 = 0, num2 = 0, num3 = 0) {
    const result = num1 + num2 + num3;
    return result;
}
console.log(add());

//2
function moneyDeposit(deposit = 50) {
    return deposit;
}
console.log(moneyDeposit(100));

//3
function income(name = "anonymous", monthly = 0) {
    console.log(name, monthly);
}
income("Haa-meem", 60000);

//4
function square(num = 1) {
    return num * num;
}
console.log(square());

//5
function productPrice(name = "Unknown product", price = 1) {
    console.log(name, price);
}
productPrice("Chair", 4000);

//6
function favBooks(books = ["JS book"]) {
    return books;
}
console.log(favBooks(["Sherlock Holmes"]));

//7
function totalPrice(product = { price: 10, quantity: 1 }) {
    let total = product.price * product.quantity;
    return total;
}
console.log(totalPrice({ price: 100, quantity: 2 }));

//8
function numDouble(nums = [5, 10, 15]) {
    let newArray = [];
    for (const num of nums) {
        console.log(num * 2);
        newArray.push(num * 2);
    }
    return newArray;
}
console.log(numDouble());

//9
function simpleInterest(obj = { principal: 1000, rate: 5 }) {
    return (obj.principal * obj.rate / 100);
}
console.log(simpleInterest({ principal: 100, rate: 1 }));

//10
function incomeTax(obj = { salary: 50000, tax: 10 }) {
    const tax = obj.salary * obj.tax / 100;
    return (obj.salary - tax);
}
console.log(incomeTax({ salary: 65000, tax: 10 }));