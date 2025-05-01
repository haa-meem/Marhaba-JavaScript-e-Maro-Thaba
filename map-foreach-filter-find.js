//Page 221

//1
const snackPrice = [30, 45, 20, 60, 10];
const incPrice = snackPrice.map(price => price + 13);
console.log(incPrice);

//2
const legendPlayers = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const players = legendPlayers.filter(player => player.length > 5);
console.log(players);

//3
const number = [10, 15, 20, 25, 30, 35];
const upperTwenty = number.find(num => num > 20);
console.log(upperTwenty);

//4
const heights = [65, 70, 68, 72, 68, 73];
const taller = heights.filter(height => height > 69);
console.log(taller);

//5
const numbers = [7, 10, 15, 20, 25, 30];
const dividedByThree = numbers.map(num => num / 3);
console.log(dividedByThree);

//6
const friends = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"];
const thirdLetter = friends.map(friend => friend[2]);
console.log(thirdLetter);

//7
const array = ['Tom', 'Harry', 'Sam', 'Jack'];
const findH = array.find(arr => arr[0] === 'H');
console.log(findH);

//8
const nums = [1, 2, 3, 4, 5];
const eachNumber = nums.forEach(num => console.log(num));