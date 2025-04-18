//Page 177

//1
function noDuplicateNumbers(numbers) {
    const uniqueNums = [];
    for (const number of numbers) {
        if (uniqueNums.includes(number) === false) {
            uniqueNums.push(number);
        }
    }
    return uniqueNums;
}
console.log(noDuplicateNumbers([1, 5, 61, 5, 87, 7, 5, 81, 61]));