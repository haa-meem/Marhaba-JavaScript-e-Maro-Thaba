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