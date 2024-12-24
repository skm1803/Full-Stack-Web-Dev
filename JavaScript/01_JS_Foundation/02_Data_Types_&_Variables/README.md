# JavaScript: Variables and Data Types

## Variables

In JavaScript, **variables** are containers used to store data that can be referenced and manipulated later in your program. You can declare variables using `var`, `let`, or `const`.

### Declaring Variables

1. **`var`**: The older way to declare variables. It has function scope and can be redeclared.
2. **`let`**: Introduced in ES6, it has block scope and cannot be redeclared in the same scope.
3. **`const`**: Used for declaring constants. The value of a `const` variable cannot be reassigned.

### Example

```javascript
var x = 10;
let y = 20;
const z = 30;
```

---

## Data Types in JavaScript

JavaScript has two main categories of data types: **Primitive** and **Non-Primitive**.

### 1. Primitive Data Types

- **String**: Textual data enclosed in quotes (`"Hello"`, `'World'`).
- **Number**: Numeric data (`42`, `3.14`).
- **Boolean**: Logical values (`true` or `false`).
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents an intentional absence of any value.
- **Symbol**: Introduced in ES6, used for creating unique identifiers.
- **BigInt**: For very large integers beyond the `Number` type's limit.

#### Example:

```javascript
let str = "Hello, JavaScript"; // String
let num = 42; // Number
let isTrue = true; // Boolean
let notAssigned; // Undefined
let empty = null; // Null
let unique = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt
```

---

### 2. Non-Primitive (Object) Data Types

- **Object**: A collection of key-value pairs.
- **Array**: An ordered list of values.
- **Function**: Reusable code blocks.
- **Date**, **RegExp**, etc., are also objects.

#### Example:

```javascript
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3]; // Array
function greet() {
  console.log("Hello!");
} // Function
```
