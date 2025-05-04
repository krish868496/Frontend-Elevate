
// Step 1: Function Basics
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Step 2: Function Expression & Arrow Function
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 5)); // Output: 8

const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // Output: 24

// Step 3: First-Class Functions
const greetUser = function(name) {
  return `Hi, ${name}`;
};

function welcome(callback, userName) {
  console.log(callback(userName));
}
welcome(greetUser, "John"); // Output: Hi, John

// Step 3: Callback Function Example
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}`); // Output: Hello, John
});

// Step 3: Asynchronous Callback using setTimeout
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);

// React-like Example in Vanilla JS
function simulateButtonClick(callback) {
  console.log("Simulating button click...");
  callback("clicked");
}

simulateButtonClick(function(msg) {
  console.log("Button was", msg); // Output: Button was clicked
});



// Function Composition - Beginner to Pro Level

// 🧱 Beginner Level - Like Playing With LEGOs
const pickUp = (item) => item + " picked up";
const polish = (item) => item + " and polished";
const sell = (item) => item + " and sold";

const doEverything = (item) => sell(polish(pickUp(item)));

console.log(doEverything("Sword")); // Sword picked up and polished and sold

// 🛠️ Intermediate Level - Compose Function
const compose = (...fns) => (input) =>
  fns.reduceRight((acc, fn) => fn(acc), input);

const processItem = compose(sell, polish, pickUp);
console.log(processItem("Shield")); // Shield picked up and polished and sold

// 🧪 Real World: Email Processing
const trim = (str) => str.trim();
const toLower = (str) => str.toLowerCase();
const isEmail = (str) => str.includes("@");

const validateEmail = compose(isEmail, toLower, trim);
console.log(validateEmail("  Hello@World.com  ")); // true

// ⚛️ React-like Example: Form Validation Rules
const required = (val) => val.length > 0;
const hasEmail = (val) => val.includes("@");
const isShort = (val) => val.length < 20;

const validateInput = compose(isShort, hasEmail, required);
console.log(validateInput("test@email.com")); // true

// 🎁 Bonus: Compose for Any Data Processing
const double = x => x * 2;
const square = x => x * x;

const processNumber = compose(square, double); // square(double(x))
console.log(processNumber(3)); // (3 * 2)^2 = 36
