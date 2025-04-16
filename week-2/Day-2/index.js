// 1. Undefined example
let a;
console.log("a is:", a); // undefined

// 2. Null example
let b = null;
console.log("b is:", b); // null

// 3. Function with no return
function noReturn() {}
console.log("noReturn():", noReturn()); // undefined

// 4. Explicit null assignment
let user = { name: "Alice" };
user = null;
console.log("user is:", user); // null

// 5. Equality checks
console.log(null == undefined); // true
console.log(null === undefined); // false

// 6. Arithmetic behavior
let x = null;
let y = undefined;
console.log("null + 1 =", x + 1); // 1
console.log("undefined + 1 =", y + 1); // NaN

// 7. Typeof results
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// 8. JSON.stringify behavior
const data = { a: undefined, b: null };
console.log("JSON:", JSON.stringify(data)); // {"b":null}

// 9. React conditional rendering (pseudo-code)
const Welcome = ({ user }) => {
  return <div>{user ? <h1>Hello, {user.name}</h1> : null}</div>;
};

// 10. Optional chaining
const name = user?.profile?.name ?? "Anonymous";

// 11. useState with null (React pseudo-code)
const [selectedUser, setSelectedUser] = useState(null);

useEffect(() => {
  fetchUser().then((user) => setSelectedUser(user));
}, []);

// 12. Nullish coalescing with props
function Profile({ age }) {
  return <p>Age: {age ?? "Not provided"}</p>;
}
