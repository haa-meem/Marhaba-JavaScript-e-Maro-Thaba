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