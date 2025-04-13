//Page 157

//1
function isEverOrOdd(arr) {
    const length = arr.length;
    if (length % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
const array = [12, 45, 78, 121254, 4, 5];
console.log(isEverOrOdd(array));

//2
function firstLetter(str) {
    return str[0];
}
console.log(firstLetter("Haa-meem"));

//3
function isBigOrSmall(num) {
    if (num > 10) {
        return num / 10;
    } else {
        return num * 10;
    }
}
console.log(isBigOrSmall(13));

//4
function elementsAddition(arr) {
    const add = arr[0] + arr[1];
    return add;
}
console.log(elementsAddition([2, 4, 3, 8, 9]))

//5
function doubleOrTriple(n) {
    if (n > 0) {
        return n * 2;
    } else {
        return n * 3;
    }
}
console.log(doubleOrTriple(-13));

//6
function nameBigOrSmall(name1, name2) {
    if (name1.length > name2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(nameBigOrSmall("Haa-meem", "Mehdi"));

//7
function numMultipy(num1, num2) {
    const multipy = num1 * num2;
    if (multipy > 100) {
        return multipy / 2;
    } else {
        return multipy;
    }
}
console.log(numMultipy(13, 60));