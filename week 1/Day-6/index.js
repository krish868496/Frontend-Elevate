// 🧠 Shadowing Practice Problems

console.log("🔹 Problem 1: Legal Shadowing (Block Scope)");
let x = 5;
{
  let x = 10;
  console.log("Inner x:", x); // Expected: 10
}
console.log("Outer x:", x); // Expected: 5

console.log("\n🔹 Problem 2: Illegal Shadowing (var and let)");
var y = 100;
try {
  {
    let y = 200; // ❌ Should throw SyntaxError in strict mode
    console.log("Inner y:", y);
  }
} catch (e) {
  console.error("Illegal Shadowing Error:", e.message);
}
console.log("Outer y:", y); // Expected: 100

console.log("\n🔹 Problem 3: Function Scope Shadowing");
const greeting = "Hello";
function greet() {
  const greeting = "Hi";
  console.log("Inside function:", greeting); // Expected: Hi
}
greet();
console.log("Outside function:", greeting); // Expected: Hello

console.log("\n🔹 Problem 4: Loop Scope Shadowing");
let i = "outside";
for (let i = 0; i < 2; i++) {
  console.log("Loop i:", i); // Expected: 0, 1
}
console.log("After loop i:", i); // Expected: outside

console.log("\n🔹 Problem 5: Closure with Shadowing");
let value = "outer";
function outerFunc() {
  let value = "inner";
  return function () {
    console.log("Inside closure:", value); // Expected: inner
  };
}
const closureFunc = outerFunc();
closureFunc();

console.log("\n🔹 Problem 6: Nested Blocks and Shadowing");
let z = 1;
{
  let z = 2;
  {
    let z = 3;
    console.log("Innermost z:", z); // Expected: 3
  }
  console.log("Middle z:", z); // Expected: 2
}
console.log("Outer z:", z); // Expected: 1