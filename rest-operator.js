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