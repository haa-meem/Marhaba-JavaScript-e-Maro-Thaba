//Page 287

//1
const time = new Date();
console.log(time);

//2
const newDate = new Date(2035, 6, 15, 14, 45, 30);
console.log(newDate);

//3
console.log(time.getFullYear());

//4
time.setFullYear(2036);
console.log(time.getFullYear());

//5
const newTime = new Date(2029, 2, 16);
switch (newTime.getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
}
