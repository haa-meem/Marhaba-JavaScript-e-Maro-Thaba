//Page 153-154

//1
function greaterThanTen(num) {
    if (num > 10) {
        return true;
    }
    return false;
}
console.log(greaterThanTen(11));

//2
function divisibleByThirteen(num) {
    if (num % 13 === 0) {
        return true;
    }
    return false;
}
console.log(divisibleByThirteen(60));

//3
function totalBill(rice, curry, drinks) {
    return rice + curry + drinks;
}
console.log(totalBill(20, 30, 25));

//4
function isAdult(age) {
    if (age > 18) {
        return "Eligible for Voting";
    }
    return "Not Eligible";
}
console.log(isAdult(23));

//5
function stringLength(string) {
    return string.length;
}
console.log(stringLength("Assalamualaikum"));

//6
function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(average(3, 5, 9));

//7
function isNegative(num) {
    if (num < 0) {
        return num * -1;
    }
}
console.log(isNegative(-12));