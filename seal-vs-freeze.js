//Page 139-140

//1
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
}
Object.freeze(headphone);
headphone.isNew = true;
console.log(headphone);

//2
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
player.country = "Argentina";
console.log(player);

//3
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
}
Object.seal(book);
book.author = "Joanne Rowling";
console.log(book);

//4
const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price;
console.log(gadget);

//5
const animal = {
    name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal);
animal.location = "Baganbari";
console.log(animal);

//6
const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
}
Object.seal(food);
food.price += 100;
console.log(food);
food.price -= 150;
console.log(food);
