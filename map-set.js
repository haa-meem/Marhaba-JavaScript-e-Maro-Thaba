//Page 293

//1
const unique = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(unique);

//2
const set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);
console.log(set);

//3
const newSet = new Set([10, 20, 30]);
newSet.delete(10);
console.log(newSet);

//4
const newArraySet = new Set([1, 2, 3, 4, 2, 1, 5, 5]);
console.log(newArraySet);
console.log([...newArraySet]);
