
// ----------------------------------------
// 🧪 Practice Examples for call, apply, bind
// ----------------------------------------

// Basic object and function for demo
const user = {
  name: 'Alice',
  greet: function(location, time) {
    console.log(`${this.name} says hello from ${location} at ${time}`);
  }
};

const anotherUser = {
  name: 'Bob'
};

// --- .call() Example
user.greet.call(anotherUser, 'New York', 'morning'); // Bob says hello from New York at morning

// --- .apply() Example
user.greet.apply(anotherUser, ['Paris', 'evening']); // Bob says hello from Paris at evening

// --- .bind() Example
const boundGreet = user.greet.bind(anotherUser, 'Tokyo', 'night');
boundGreet(); // Bob says hello from Tokyo at night


// ---------------------------
// React-style class example
// ---------------------------
class ButtonComponent {
  constructor(name) {
    this.name = name;
    this.handleClick = this.handleClick.bind(this); // binding `this`
  }

  handleClick() {
    console.log(`${this.name} clicked!`);
  }

  simulateClick() {
    // simulate button click
    this.handleClick();
  }
}

const btn = new ButtonComponent('MyButton');
btn.simulateClick(); // MyButton clicked!


// ---------------------------
// Functional Component pattern
// ---------------------------
function simulateFunctionalComponent() {
  const name = 'FuncComp';
  const handleClick = () => {
    console.log(`${name} clicked!`);
  };
  handleClick(); // FuncComp clicked!
}
simulateFunctionalComponent();
