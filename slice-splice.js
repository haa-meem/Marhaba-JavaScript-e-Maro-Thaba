//Page 236

//1
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(fruits.slice(1, 3));

//2
const cars = ["Tesla", "BMW", "Toyota", "Ford"];
console.log(cars.slice(0, 2));

//3
const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
console.log(movieList.splice(2, 1, "Batman", "Superman"));
console.log(movieList);

//4
const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
console.log(players.splice(2, 1, "Halland"));
console.log(players);