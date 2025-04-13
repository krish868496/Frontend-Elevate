// 🔍 Scope and Scope Chaining Practice Problems

// ✅ 1. Global Scope Practice
let globalVar = "Global Variable";

function printGlobal() {
  console.log("1:", globalVar); // Output?
}
printGlobal();
console.log("2:", globalVar); // Output?

// ✅ 2. Function Scope Practice
function functionScopeExample() {
  let functionVar = "Function Scoped";
  console.log("3:", functionVar); // Output?
}
functionScopeExample();
// console.log(functionVar); // ❌ Uncomment this line. What happens?

// ✅ 3. Block Scope Practice
if (true) {
  let blockVar = "Block Scoped";
  const anotherBlock = "Another Block Scoped";
  console.log("4:", blockVar); // Output?
}
// console.log(blockVar); // ❌ Uncomment and test

// ✅ 4. Scope Chaining Practice
let a = "Global A";

function outer() {
  let b = "Outer B";

  function inner() {
    let c = "Inner C";
    console.log("5:", a); // From global scope
    console.log("6:", b); // From outer scope
    console.log("7:", c); // From inner scope
  }

  inner();
}
outer();

// ✅ 5. Shadowing Practice
let shadowVar = "I am global";

function shadowingExample() {
  let shadowVar = "I am local";
  console.log("8:", shadowVar); // Which value will it print?
}
shadowingExample();
console.log("9:", shadowVar); // Which value will it print?

// ✅ 6. Illegal Shadowing (Uncomment to test)
// let x = 10;
// {
//   var x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared
// }

// ✅ 7. var vs let/const in Loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000); // What will be printed?
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000); // What will be printed?
}
