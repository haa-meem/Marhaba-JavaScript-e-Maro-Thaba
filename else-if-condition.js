//Page 83-84

//1
const friendBought = 4500;
if (friendBought > 6000) {
    const discount = friendBought / 100 * 15;
    const pay = friendBought - discount;
    console.log(pay);
} else if (friendBought > 3000) {
    const discount = friendBought / 100 * 5;
    const pay = friendBought - discount;
    console.log(pay);
} else {
    console.log(pay);
}

//2
const age = 23;
if (age > 60) {
    console.log("Get 50% discount");
} else if (age < 12) {
    console.log("Get FREE food");
}
else {
    console.log("No Discount, you have to pay the full price");
}

//3
const balance = 20000;
if (balance < 1000) {
    console.log("Deposit kor");
} else if (balance <= 5000) {
    console.log("Bindas life enjoy kor");
} else {
    console.log("Tui dhoni, amake biya kor");
}

//4
const examMarks = 72;
if (examMarks < 50) {
    console.log("Fail");
} else if (examMarks < 80) {    //I haven't done this(examMarks<=80) because in real life, 80==A+
    console.log("Pass");
} else {
    console.log("A+");
}

//5
const bookPage = 448;
if (bookPage < 100) {
    console.log("Small book");
} else if (bookPage <= 500) {
    console.log("Mid-size book");
} else {
    console.log("heart-attack size book");
}

//6
const temperature = 23    //temperature in Degree Celcius
if (temperature < 0) {
    console.log("Ice");
} else if (temperature <= 20) {
    console.log("Cool Cool");
} else {
    console.log("Hot Hot");
}

//7
const playerLevel = 68;   //FREE FIRE level
if (playerLevel < 10) {
    console.log("novice");
} else if (playerLevel <= 50) {
    console.log("Expert");
} else {
    console.log("Pro Gamer");
}