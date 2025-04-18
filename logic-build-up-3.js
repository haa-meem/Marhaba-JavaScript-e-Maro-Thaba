//Page 175

//1
function evensAvg(numbers) {
    let count = 0, sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
            count += 1;
        }
    }
    if (count === 0) {
        return 0;
    }
    const avg = sum / count;
    return avg;
}
console.log(evensAvg([1, 4, 6, 3, 8, 9]));
console.log(evensAvg([3, 7, 9, 13, 11]));

//2
function doubleOdds(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(2 * number);
        }
    }
    return odds;
}
console.log(doubleOdds([1, 4, 2, 5, 7, 9, 6]));
console.log(doubleOdds([11, 34, 6, 39, 29, 13]));

//3
function oddsOrEvens(numbers) {
    for (const number of numbers) {
        if (number % 2 === 1) {
            return "Odd numbers found";
        } else {
            return "No odd numbers found";
        }
    }
}
console.log(oddsOrEvens([11, 13, 15, 2, 32, 96, 5]));
console.log(oddsOrEvens([11, 13, 15, 17, 19, 21]));
console.log(oddsOrEvens([12, 14, 16, 18, 20, 22]));