
---

### 📄 `dom-notes.md`

```md
# DOM (Document Object Model) in JavaScript

## ✅ What is the DOM?
- DOM stands for **Document Object Model**.
- It’s a **tree-like structure** created by the browser from an HTML document.
- Each HTML element becomes a **node** in the DOM tree.
- JavaScript can use the DOM to **read**, **change**, **add**, or **remove** elements.

## 🔍 How to Access DOM Elements

### 1. By ID
```js
const title = document.getElementById("title");
```

### 2. By Class
```js
const boxes = document.getElementsByClassName("box");
```

### 3. By Tag
```js
const divs = document.getElementsByTagName("div");
```

### 4. Query Selector (most common)
```js
const firstBox = document.querySelector(".box");
const allBoxes = document.querySelectorAll(".box");
```

---

## 🛠 DOM Manipulation

### ✅ Changing Content
```js
element.textContent = "Hello";
element.innerHTML = "<strong>Hello</strong>";
```

### ✅ Changing Style
```js
element.style.color = "red";
```

### ✅ Adding/Removing Classes
```js
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("dark-mode");
```

### ✅ Creating and Adding Elements
```js
const div = document.createElement("div");
div.textContent = "New Div";
document.body.appendChild(div);
```

### ✅ Removing Elements
```js
element.remove();
```

---

## 🎯 DOM Events

### ✅ Listening to Events
```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### Common Events:
- `click`
- `input`
- `submit`
- `mouseover`
- `keydown`

---

## 🧠 DOM in React (Overview)

React does not directly manipulate the real DOM. It uses a **Virtual DOM**:
- A lightweight copy of the real DOM.
- React updates only the part of the DOM that changed, improving performance.

---

## ⚠️ Keys in React Lists

### ❌ Using Index as Key (Not Safe)
```jsx
{items.map((item, index) => (
  <input key={index} defaultValue={item.name} />
))}
```
- May lead to bugs when items are added/removed/reordered.
- DOM nodes may not match data correctly.

### ✅ Use Unique ID as Key
```jsx
{items.map((item) => (
  <input key={item.id} defaultValue={item.name} />
))}
```
- React correctly identifies each element.
- Safer and more predictable behavior.

---

## 🧪 Example: Input Values Changing Unexpectedly (When Using Index as Key)

```jsx
const [users, setUsers] = useState([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]);

// BAD
users.map((user, index) => (
  <input key={index} defaultValue={user.name} />
));

// GOOD
users.map((user) => (
  <input key={user.id} defaultValue={user.name} />
));
```

---

## 🧠 Summary

| Topic                     | Key Concepts                          |
|--------------------------|----------------------------------------|
| DOM Basics               | Nodes, elements, tree structure       |
| DOM Access               | getElementById, querySelector         |
| DOM Manipulation         | content, style, classes, create/remove |
| Events                   | addEventListener                      |
| React & Virtual DOM      | Efficient re-rendering                |
| React Keys               | Avoid using index; use unique IDs     |



# Advanced DOM Notes (JavaScript & React)

These are continued notes focusing only on the new DOM-related content that wasn't covered in the initial `.md` file.

---

## 🧠 React Internal Working — Reconciliation, Virtual DOM, and Fiber Architecture

### 1. 🔁 Reconciliation in React

Reconciliation is React's process to determine what has changed in the UI after a state or props update.

- Compares the new virtual DOM with the previous one.
- Minimizes changes to the real DOM.

### 2. 🧩 Virtual DOM (VDOM)

- A lightweight JavaScript representation of the real DOM.
- React renders to the VDOM first and diffs it with the previous version to apply minimal DOM operations.

### 3. 🔬 Diffing Algorithm

React follows these rules when diffing:
- If the element type is the same: update the DOM node.
- If the type is different: destroy and rebuild that node.
- Lists should use **unique keys** to help React identify changes efficiently.

**Example:**
```jsx
// Bad: uses index as key
items.map((item, index) => <li key={index}>{item}</li>);

// Good: uses a unique key
items.map((item) => <li key={item.id}>{item.name}</li>);
```

### 4. 🌳 Fiber Architecture

React Fiber is the modern reconciliation engine introduced in React 16+.

- Enables interruptible rendering.
- Supports prioritization of tasks.
- Improves responsiveness of UI rendering.

### 5. 🧪 Sync vs Concurrent Rendering

| Type              | Behavior                        |
|-------------------|----------------------------------|
| Legacy (stack)    | Synchronous, blocking updates    |
| Fiber (current)   | Asynchronous, interruptible      |
| Concurrent Mode   | Schedules tasks with smart prioritization |

---

### 💬 Interview Questions

- What is reconciliation in React?
- How does the virtual DOM help React?
- Why should we avoid using index as a key?
- What is Fiber architecture and why is it important?

---
