# JavaScript: `let`, `var`, and `const` Deep Dive


## 🔍 1. Core Differences

| Feature                  | `var`            | `let`              | `const`                 |
|--------------------------|------------------|---------------------|--------------------------|
| Scope                   | Function          | Block               | Block                    |
| Hoisting                | Yes (initialized to `undefined`) | Yes (but not initialized - TDZ) | Yes (not initialized - TDZ) |
| Re-declaration          | Allowed           | ❌ Not allowed      | ❌ Not allowed           |
| Re-assignment           | Allowed           | Allowed             | ❌ Not allowed (binding only) |
| Attached to global obj  | ✅ Yes            | ❌ No               | ❌ No                    |


---

## 🔄 2. Temporal Dead Zone (TDZ)

- `let` and `const` are hoisted but not initialized
- Accessing them before declaration gives **ReferenceError**

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

---

## 🧬 3. Behavior in Loops

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
} // Output: 3, 3, 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
} // Output: 0, 1, 2
```

---

## 🧷 4. `const` with Objects

```js
const arr = [1, 2];
arr.push(3);      // ✅ Allowed
arr = [4, 5];     // ❌ TypeError: Assignment to constant variable.
```

---

## ✅ 5. When to Use What

- `const`: default choice, use unless you need to reassign
- `let`: use when variable needs to change
- `var`: avoid unless required for legacy compatibility


---

# 🎯 Interview Questions + Answers

---

## ❓ Q1: What is hoisting?
**A:** Hoisting is JavaScript's default behavior of moving declarations to the top. `var` is hoisted and initialized, while `let` and `const` are hoisted but not initialized (TDZ).

---

## ❓ Q2: Why is `let` preferred over `var`?
**A:** Because `let` is block-scoped and doesn't allow re-declaration or access before initialization, reducing bugs.

---

## ❓ Q3: Can you mutate an object declared with `const`?
**A:** Yes, the binding is constant, not the contents.
```js
const obj = { a: 1 };
obj.a = 2; // ✅ allowed
```

---

## ❓ Q4: What is the Temporal Dead Zone?
**A:** Time between entering scope and variable declaration where accessing `let`/`const` causes ReferenceError.

---

## ❓ Q5: What's the difference in closures between `var` and `let` in loops?
**A:** `let` creates a new binding per iteration, while `var` shares the same.

---

## ❓ Q6: Which should be the default for variable declarations?
**A:** Use `const` by default; only use `let` when reassignment is required.



### Advanced Examples + Interview Qs

---

### 🔬 1. Real-World Scope Example

```js
function demoScope() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // ✅ 10
  console.log(b); // ❌ ReferenceError
  console.log(c); // ❌ ReferenceError
}
demoScope();
```

**Explanation:**  
- `var` leaks out of block scope.  
- `let` and `const` are block scoped — safer and preferred.

---

### 🔄 2. Hoisting Internals (Execution Context Example)

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;
```

**Memory Phase:**
- `var x → undefined`
- `let y → uninitialized (TDZ)`

---

### 💡 3. Why You Should Avoid `var`

```js
var user = "Sam";
var user = "Alex"; // ✅ No error

let id = 1;
let id = 2; // ❌ SyntaxError
```

**Issue:** Re-declarations with `var` can lead to unexpected bugs.

---

### 🎯 More Interview Questions

---

#### ❓ Q11: Can `let`/`const` declarations be accessed before declaration?
**A:** No — they are in the **Temporal Dead Zone (TDZ)**. Access throws `ReferenceError`.

---

#### ❓ Q12: What's a common bug caused by `var` in async code?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 — not expected
```

**Fix: Use `let` for block-level scoping:**

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
```

---

#### ❓ Q13: Why is `const` safer than `let`?
**A:** It makes the intent clear — variables shouldn’t be reassigned accidentally.

```js
const API_URL = "https://api.example.com"; // Safe
```

---

#### ❓ Q14: What’s a pitfall with `const` and arrays?

```js
const nums = [1, 2];
nums.push(3); // ✅ works
nums = [1, 2, 3]; // ❌ TypeError
```

---

#### ❓ Q15: Which is better for performance?
**A:** No direct performance difference, but `const` helps JS engines with optimization because it signals that the value won’t change.

Perfect! Here’s **Step 3** – the **Final Layer** of your `let`, `var`, and `const` mastery:

---

### ✅ Step 3: Deep Internal Working, Edge Cases, and Bonus Questions

---

### 🔧 1. Internal Creation Phase Behind the Scenes

Let’s take this code:

```js
function run() {
  console.log(a); // undefined
  console.log(b); // ❌ ReferenceError (TDZ)
  var a = 10;
  let b = 20;
}
run();
```

**Behind the scenes:**

- **Creation Phase:**
  - `var a → undefined`
  - `let b → TDZ (uninitialized)`
- **Execution Phase:**
  - `console.log(a)` → `undefined`
  - `console.log(b)` → ReferenceError

---

### 📦 2. Real Project Pitfall Example

```js
var isLoggedIn = true;

if (isLoggedIn) {
  var token = "abc123";
}
console.log(token); // ✅ Accessible globally — security flaw!
```

Use `let` or `const` to contain sensitive logic:

```js
if (isLoggedIn) {
  const token = "abc123";
}
console.log(token); // ❌ ReferenceError
```

---

### 🧨 3. Re-declaration Problems

```js
function demo() {
  var a = 5;
  if (true) {
    var a = 10;
    console.log(a); // 10 (overwrites outer)
  }
  console.log(a); // 10
}
demo();
```

```js
function safeDemo() {
  let a = 5;
  if (true) {
    let a = 10;
    console.log(a); // 10
  }
  console.log(a); // 5 (safe scoping)
}
safeDemo();
```

---

### 🧠 Bonus Interview Questions

---

#### ❓ Q16: Can we conditionally declare `let` or `const`?

```js
if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // ❌ ReferenceError
```

**A:** Yes, but they're block scoped — accessible only within `{}`.

---

#### ❓ Q17: Can we use `let` or `const` before declaring them?

**A:** No. This is where TDZ applies. Unlike `var`, these don't default to `undefined`.

---

#### ❓ Q18: Can we use `const` for performance optimization?

**A:** Not directly, but it helps JS engines optimize because reassignment isn’t allowed, which can help in large apps.

---

#### ❓ Q19: How does hoisting of function declarations differ?

```js
sayHi(); // ✅ works
function sayHi() {
  console.log("Hi");
}
```

But this won’t work:

```js
sayHi(); // ❌ TypeError
const sayHi = () => console.log("Hi");
```

Arrow functions with `const` are hoisted as uninitialized (TDZ).

---

#### ❓ Q20: Are `let` and `const` added to the global object?

**A:** No.

```js
var name = "Sam";
let city = "NY";

console.log(window.name); // "Sam"
console.log(window.city); // undefined
```
