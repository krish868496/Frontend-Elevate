
// 📁 call-stack-practice.js

// 🔰 Example 1: Basic Function Calls
function greet() {
  console.log("Hello");
  askName();
}

function askName() {
  console.log("What is your name?");
}

greet(); // Call Stack: greet() -> askName()

// 🔰 Example 2: Nested Function Calls
function outer() {
  console.log("Outer function");
  function inner() {
    console.log("Inner function");
  }
  inner();
}

outer(); // Call Stack: outer() -> inner()

// 🔰 Example 3: Stack Overflow (Don't run this!)
/*
function recurse() {
  recurse();
}
recurse(); // ❌ Will cause "Maximum call stack size exceeded"
*/

// 🔰 Example 4: Visualize popping and pushing
function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
}

first(); // Call Stack: first() -> second()

// 🔰 Example 5: Functions returning values
function add(a, b) {
  return a + b;
}

function calculate() {
  const result = add(5, 3);
  console.log("Result:", result);
}

calculate(); // Call Stack: calculate() -> add()

// ✅ Summary: These examples help visualize how JS pushes and pops functions in and out of the call stack.
