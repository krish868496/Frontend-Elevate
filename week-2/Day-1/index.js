// Step 1: Shallow Copy Example
const original = {
  name: "John",
  address: { city: "London" },
};

const shallowCopy = { ...original };
shallowCopy.address.city = "Paris";
console.log("Shallow Copy Output:", original.address.city); // Output: Paris

// Step 2: Deep Copy Example (using structuredClone)
const deepOriginal = {
  name: "Jane",
  address: { city: "New York" },
};

const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = "Berlin";
console.log("Deep Copy Output:", deepOriginal.address.city); // Output: New York

// Step 3: React-style shallow copy for nested updates
const projects = [
  {
    name: "Work",
    todos: [
      { id: 1, task: "Email boss", done: false },
      { id: 2, task: "Finish report", done: true },
    ],
  },
  {
    name: "Home",
    todos: [{ id: 3, task: "Buy milk", done: false }],
  },
];

function toggleTask(projectIndex, todoId) {
  const updatedProjects = projects.map((proj, index) =>
    index === projectIndex
      ? {
          ...proj,
          todos: proj.todos.map((todo) =>
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
          ),
        }
      : proj
  );

  console.log("Toggled Projects:", updatedProjects);
}

toggleTask(0, 1); // Toggles done for 'Email boss'

// Step 4: Deep copy for nested drag-and-drop update
function moveTask(fromIndex, toIndex, taskId) {
  const clonedProjects = structuredClone(projects);

  const fromTodos = clonedProjects[fromIndex].todos;
  const toTodos = clonedProjects[toIndex].todos;

  const taskToMove = fromTodos.find((todo) => todo.id === taskId);
  clonedProjects[fromIndex].todos = fromTodos.filter(
    (todo) => todo.id !== taskId
  );
  toTodos.push(taskToMove);

  console.log("Projects After Move:", clonedProjects);
}

moveTask(0, 1, 2); // Move task with ID 2 from Work to Home
