//Page 307

//1
setTimeout(
  () =>
    console.log(
      "I wasted 3 seconds of my life by lookin at screen and doing nothing",
    ),
  3000,
);

//2
let num = 129;
setInterval(() => console.log((num += 2)), 2000);

//3
let count = 0;
const intervalID = setInterval(() => {
  console.log("I am learning javascript ");
  count++;
  if (count == 6) {
    clearInterval(intervalID);
  }
}, 2000);
