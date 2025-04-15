//Page 169

//1
function incomeTax(incomeAmount) {
    if (incomeAmount <= 50000) {
        return 10;
    }
    else if (incomeAmount <= 100000) {
        return 20;
    }
    else if (incomeAmount <= 200000) {
        return 30;
    }
    else {
        return 40;
    }
}
console.log(incomeTax(70000));

//2
function deliveryCharge(productWeight) {
    if (productWeight < 10) {
        return 100;
    }
    else if (productWeight < 20) {
        return 300;
    }
    else if (productWeight < 50) {
        return 1000;
    }
    else {
        return productWeight * 100;
    }
}
console.log(deliveryCharge(130));

//3
function grade(marks) {
    if (marks < 50) {
        return "F";
    }
    else if (marks < 60) {
        return "D";
    }
    else if (marks < 70) {
        return "C";
    }
    else if (marks < 80) {
        return "B";
    }
    else {
        return "A";
    }
}
console.log(grade(75));