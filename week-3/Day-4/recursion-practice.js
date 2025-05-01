

// 1. Factorial
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive call
}
console.log("Factorial(5):", factorial(5)); // 120

// 2. Fibonacci
function fib(n) {
  if (n <= 1) return n; // base case
  return fib(n - 1) + fib(n - 2); // recursive call
}
console.log("Fibonacci(6):", fib(6)); // 8

// 3. Flatten a Nested Array
function flatten(arr) {
  let result = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el)); // recursion
    } else {
      result.push(el);
    }
  });
  return result;
}
console.log("Flattened Array:", flatten([1, [2, [3, 4], 5], 6]));

// 4. Sum of Digits
function sumDigits(n) {
  if (n < 10) return n; // base case
  return (n % 10) + sumDigits(Math.floor(n / 10)); // recursion
}
console.log("Sum of Digits(1234):", sumDigits(1234)); // 10

// 5. Directory/File Structure Printer
const fileSystem = {
  name: "root",
  children: [
    { name: "index.js" },
    {
      name: "src",
      children: [
        { name: "App.js" },
        { name: "components", children: [{ name: "Header.js" }] },
      ]
    }
  ]
};
function printFiles(folder, indent = "") {
  console.log(indent + folder.name);
  if (folder.children) {
    folder.children.forEach(child => printFiles(child, indent + "  "));
  }
}
console.log("Directory Structure:");
printFiles(fileSystem);

// 6. Reverse a String Recursively
function reverseString(str) {
  if (str === "") return ""; // base case
  return reverseString(str.slice(1)) + str[0]; // recursion
}
console.log("Reverse of 'hello':", reverseString("hello")); // "olleh"
