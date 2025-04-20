
// 📁 execution-context-practice.js

// === Global Execution Context ===
var globalVar = "I am global";

function globalFunction() {
  console.log("Inside globalFunction:", globalVar);
}
globalFunction(); // GEC + Function EC

// === Function Execution Context ===
function outerFunction() {
  var outerVar = "Outer";

  function innerFunction() {
    var innerVar = "Inner";
    console.log("Accessing outerVar inside innerFunction:", outerVar);
    console.log("Accessing innerVar inside innerFunction:", innerVar);
  }

  innerFunction();
}
outerFunction(); // FEC of outerFunction + FEC of innerFunction

// === Hoisting Example ===
console.log("Hoisted variable a:", a); // undefined
var a = 10;

function hoistedFunction() {
  console.log("Hoisted Function Executed");
}
hoistedFunction();

// === Call Stack Example ===
function third() {
  console.log("Third function");
}
function second() {
  third();
  console.log("Second function");
}
function first() {
  second();
  console.log("First function");
}
first();

// === this Keyword in Execution Context ===
console.log("Global this:", this);

const obj = {
  name: "JS Object",
  method: function () {
    console.log("this inside object method:", this);
  },
};
obj.method();

// === Eval Execution Context (not recommended) ===
eval("var evalVar = 'Eval variable';");
console.log("Eval Variable:", evalVar);
