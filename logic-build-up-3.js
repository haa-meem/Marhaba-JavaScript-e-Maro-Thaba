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