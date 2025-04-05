//Page 137

//1
const book = {
    name: "Marhaba, JavaScript e Maro Thaba",
    writter: "Jhankar Mahbub",
    price: 780
}
console.log(Object.keys(book));
console.log(Object.values(book));

//2
const article = {
    title: "Learning JS",
    category: "Programming"
}
console.log(Object.keys(article).includes("author"));

//3
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
}
for (const key in laptop) {
    const value = laptop[key];
    console.log(key, value);
}

//4
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
const keys = Object.keys(phone);
for (const key of keys) {
    console.log(key, phone[key]);
}

//5
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));

//6
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}
for (const book in books) {
    console.log(books[book]);
}

//7
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
for (const number in numbers) {
    console.log(numbers[number] += numbers[number]);
}

//8
const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(player));

//9
const building = {
    floors: 10,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
}
for (const key in building) {
    if (key === "address") {
        for (const prop in building[key]) {
            console.log(prop, building[key][prop]);
        }
    }
    else {
        console.log(key, building[key]);
    }
}