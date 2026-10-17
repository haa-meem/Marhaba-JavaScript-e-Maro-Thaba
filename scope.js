//Page 279

//1
const taxRate = 15;
function tax(income) {
  return (income * taxRate) / 100;
}
console.log(tax(50000));

//2
// function secret() {
//   let insideSecret = "internal secret hiding place";
// }
// console.log(insideSecret);

//3
// if (true) {
//   let temparature;
// }
// console.log(temparature);

//4
function schoolDetails() {
  let schoolName = "B.L. Govt. High School";
  function displaySchoolName() {
    console.log(schoolName);
  }
  displaySchoolName();
}

schoolDetails();
