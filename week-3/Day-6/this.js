// ========== 1. this in Methods ==========
let user1 = {
  name: "John",
  sayHi() {
    console.log(this.name); // "this" refers to the object before the dot
  },
};

user1.sayHi(); // Output: John

// ========== 2. Why not use object name inside method ==========
let user2 = {
  name: "Alice",
  sayHi() {
    console.log(user2.name); // works here
  },
};

let admin = user2;
user2 = null;
// admin.sayHi(); // ❌ Error: Cannot read property 'name' of null

// ❗ Because `user2` is now null, but method still refers to it

// ✅ Fix with this:
let user3 = {
  name: "Bob",
  sayHi() {
    console.log(this.name); // works always
  },
};

let manager = user3;
user3 = null;
manager.sayHi(); // Output: Bob

// ========== 3. Arrow functions do NOT have their own this ==========
let user4 = {
  name: "Eve",
  sayHi() {
    let arrow = () => console.log(this.name);
    arrow(); // Arrow uses parent's (sayHi's) this, which is user4
  },
};

user4.sayHi(); // Output: Eve

// ========== 4. makeUser - ref: this ==========
function makeUser() {
  return {
    name: "John",
    ref: this, // "this" refers to global object (undefined in strict mode)
  };
}

let user = makeUser();
// console.log(user.ref.name); // ❌ Error: Cannot read property 'name' of undefined

// ✅ Correct way using method:
function makeUserFixed() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let userFixed = makeUserFixed();
console.log(userFixed.ref().name); // Output: John

// ========== 5. Calculator Object ==========
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("Enter a:", 0);
    this.b = +prompt("Enter b:", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// Uncomment to test:
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// ========== 6. Chainable Ladder ==========
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

// Example usage:
// ladder.up().up().down().showStep().down().showStep();

// this_keyword_examples.js

// 1. Global context (in browser, `this` refers to window)
console.log("Global context:", this);

// 2. Inside a function (non-strict mode)
function showThis() {
  console.log("Function context (non-strict):", this);
}
showThis();

// 3. Inside an object method
const userAlice = {
  name: "Alice",
  greet() {
    console.log("Object method:", this.name);
  },
};
userAlice.greet(); // Alice

// 4. Assigned function retains `this` from caller object
function sayHi() {
  console.log("Shared method this:", this.name);
}
const person1 = { name: "Bob", sayHi };
const person2 = { name: "Carol", sayHi };
person1.sayHi(); // Bob
person2.sayHi(); // Carol

// 5. Arrow function (no own `this`, uses enclosing context)
const team = {
  name: "Dev Team",
  members: ["Sam", "Max"],
  showMembers() {
    this.members.forEach((member) => {
      console.log(`${member} from ${this.name}`);
    });
  },
};
team.showMembers(); // Correctly refers to team.name

// 6. Constructor function
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("Hello, I'm", this.name);
  };
}
const p1 = new Person("Dave");
p1.sayHello(); // Dave

// 7. Losing `this` context
const lostContext = user.greet;
lostContext(); // undefined in strict mode

// 8. Using `bind` to fix `this`
const boundGreet = user.greet.bind(user);
boundGreet(); // Alice

// 9. `call` and `apply`
function introduce(role) {
  console.log(`${this.name} is a ${role}`);
}
introduce.call({ name: "Eve" }, "Engineer");
introduce.apply({ name: "Liam" }, ["Designer"]);

