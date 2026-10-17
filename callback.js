//Page 273

//1
function gf(callMe) {
  callMe();
}

function call() {
  console.log("I love you");
}

gf(call);

//2
function obj(value) {
  value();
}

function objValue() {
  console.log({ name: "Haa-meem", age: 25 });
}

obj(objValue);

//3
function numberProcessor(num, callFunc) {
  callFunc(num / 5);
}

function numberPrint(value) {
  console.log(value);
}

numberProcessor(13, numberPrint);

//4
function hello(out) {
  out();
}

function helloOut() {
  console.log("Hello World!");
}

hello(helloOut);
