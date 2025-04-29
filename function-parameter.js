//Page 149

//1
function ageDiffer(a, b) {
    return a - b;
}
const fatherAge = 57;
const sonAge = 23;
console.log(ageDiffer(fatherAge, sonAge));

//2
function multiplicator(a, b) {
    console.log(a * b);
}
multiplicator(20, 15);

//3
function marksAdd(a, b, c) {
    console.log(a + b + c);
}
const electricalCircuit = 75;
const computerProgramming = 85;
const humanities = 90;
marksAdd(electricalCircuit, computerProgramming, humanities);

//4
function ageCalculator(a) {
    const thisYear = 2025;
    return thisYear - a;
}
const birthYear = 2001;
console.log(ageCalculator(birthYear));

//5
function buyBottleGourd(a) {
    return a / 35;
}
const myMoney = 105;
console.log(buyBottleGourd(myMoney));

//6
function average(a, b, c, d) {
    return (a + b + c + d) / 4;
}
console.log(average(3, 5, 1, 9));

//7
function shopkeeperCalc(a) {
    const sellingPrice = a + 250;
    return sellingPrice;
}
const buyingPrice = 700;
console.log(shopkeeperCalc(buyingPrice));

//8
function ageCenturyYear(a) {
    return a + 100;
}
console.log(ageCenturyYear(birthYear));    //Previously I declared my birth year

//9
function phoneHoursMonthly(a) {
    console.log(phoneHoursDay * 30);
}
const phoneHoursDay = 8;
phoneHoursMonthly(phoneHoursDay);
