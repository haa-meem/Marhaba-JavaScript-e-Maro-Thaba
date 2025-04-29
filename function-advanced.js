//Page 161

//1
function oddAddition(array) {
    let sum = 0;
    for (const arr of array) {
        if (arr % 2 === 1) {
            sum = sum + arr;
        }
    }
    return sum;
}
console.log(oddAddition([5, 15, 8, 7]));

//2
function smaller(arr) {
    return (arr[0] > arr[1] ? arr[0] : arr[1])
}
console.log(smaller([20, 45, 78]));

//3
function hideAge(age) {
    if (age < 18) {
        return 18;
    }
    else if (age > 45) {
        return 45;
    }
    else {
        return age;
    }
}
console.log(23);

//4
function divisibleByFour(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 4 === 0) {
            sum = sum + number;
        }
    }
    return sum;
}
console.log(divisibleByFour([2, 4, 5, 7, 8, 32, 45]));

//5
function numberTwenty(num) {
    if (num < 20) {
        return num * 2;
    } else {
        return num / 20;
    }
}
console.log(numberTwenty(23));

//6
function negativeAddition(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (num < 0) {
            sum = sum + num;
        }
    }
    return sum;
}
console.log(negativeAddition([-13, -15, 60, 35, 23]));

//7
function divisibleByThree(numbers) {
    let mul = 1;
    for (const num of numbers) {
        if (num % 3 === 0) {
            mul = mul * num;
        }
    }
    return mul;
}
console.log(divisibleByThree([12, 48, 27, 38, 49, 13]));