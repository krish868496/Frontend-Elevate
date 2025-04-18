// 🔰 Step 1: Basic Closure
function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = greet("John");
greetJohn(); // Output: Hello, John!

// 🔁 Step 2: Counter with Closure
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// 🔐 Step 3: Private Variables
function secretHolder() {
  let secret = "JavaScript is awesome";

  return {
    getSecret: () => secret,
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
}

const secret = secretHolder();
console.log(secret.getSecret()); // JavaScript is awesome
secret.setSecret("Closures rock!");
console.log(secret.getSecret()); // Closures rock!

// 🧠 Step 4: Closure in a Loop (Var trap)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("Using var:", i), 1000); // 3 3 3
}

// ✅ Fixed with IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(() => console.log("Using IIFE:", x), 1000);
  })(i);
}

// ✅ Also fixed with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("Using let:", i), 1000);
}

// 🧪 Step 5: Function Factory
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ⚛️ Step 6: Closure in React-like Timer (Stale state trap)
function simulateReactTimer() {
  let count = 0;

  setInterval(() => {
    console.log("🧠 Stale count:", count); // stale!
  }, 1000);

  // Simulate setState
  setTimeout(() => {
    count = 5;
    console.log("🔥 Updated count");
  }, 3000);
}

simulateReactTimer();

// 💡 Step 7: Debounce using closure
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((term) => {
  console.log("Searching for:", term);
}, 500);

search("A");
search("Ap");
search("App");
search("Appl");
search("Apple"); // Only this logs after 500ms

// 🧪 CHALLENGE: What does this print?
function mystery() {
  var secret = "🕵️";
  return function () {
    return secret;
  };
}

const spy = mystery();
secret = "🧟";
console.log(spy()); // ?
