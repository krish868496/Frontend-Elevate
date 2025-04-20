// ============================
// 🎯 JavaScript Practice File: Mutable vs Immutable
// ============================

// 1️⃣ Immutable Primitives
let num = 10;
let newNum = num;
newNum++;
console.log("Original num:", num); // 10
console.log("New num (after increment):", newNum); // 11

let str = "hello";
let newStr = str;
newStr = "world";
console.log("Original string:", str); // "hello"
console.log("New string:", newStr); // "world"

// 2️⃣ Mutable Objects
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // both point to the same reference
obj2.age = 30;
console.log("Original object:", obj1); // { name: "Alice", age: 30 }

// 3️⃣ Avoid mutation with spread operator
let original = { name: "Bob", score: 90 };
let updated = { ...original, score: 95 };
console.log("Original:", original); // score: 90
console.log("Updated:", updated); // score: 95

// 4️⃣ Immutable array updates
const colors = ["red", "green"];
const newColors = [...colors, "blue"];
console.log("Original colors:", colors); // ["red", "green"]
console.log("New colors:", newColors); // ["red", "green", "blue"]

// 5️⃣ Mutable array updates (❌ not recommended if using in React state)
const mutableColors = ["pink", "yellow"];
mutableColors.push("black");
console.log("Mutated colors:", mutableColors); // ["pink", "yellow", "black"]

// 6️⃣ Practice Tasks:
// Uncomment and solve the following:

// ✅ Task 1: Create a function that immutably adds a new hobby to a person object

// const person = { name: "John", hobbies: ["reading", "gaming"] };
// function addHobby(obj, hobby) {
//   // your code
//   return {...obj, hobbies: [...obj.hobbies, hobby]};
// }
// console.log(addHobby(person, "swimming"));
// console.log("Original person:", person);

// ✅ Task 2: Write a function that immutably updates a nested object's property

// const state = {
//   user: { name: "Emma", location: { city: "NYC", zip: 10001 } },
// };
// function updateCity(state, newCity) {
//   // your code
//   return {
//     ...state,
//     user: {
//       ...state.user,
//       location: {
//         ...state.user.location,
//         city: newCity,
//         zip: "122001",
//       },
//     },
//   };
// }
// console.log(updateCity(state, "Gurgaon"));

// ✅ Task 3: Show difference in behavior between mutable and immutable update in array

// const fruits = ["apple", "banana"];
// const mutatedFruits = fruits;
// mutatedFruits.push("orange");

// const immutablyUpdatedFruits = [...fruits, "grape"];

// console.log("Mutated fruits:", mutatedFruits);
// console.log("Original fruits:", fruits);
// console.log("Immutably updated fruits:", immutablyUpdatedFruits);
