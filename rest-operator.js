//Page 204-205

//1
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...details } = product;
console.log(details);

//2
const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" };
const { title, ...others } = project;
console.log(others);

//3
const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" };
const { language, specialty, ...more } = programmer;
console.log(more);

//4
const [first, second, ...rest] = [10, 20, 3, 30, 300, 3000];
console.log(rest);

//5
function add(a, b, ...nums) {
    let sum = 0
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
console.log(add(13, 7, 2001, 11));

//6
function avg(...nums) {
    let sum = 0
    for (const num of nums) {
        sum += num;
    }
    return sum / nums.length;
}
console.log(avg(13, 17, 15, 14, 7));