# Non-Primitive Types in JavaScript

In JavaScript, **non-primitive types** are data types that can hold collections of values or more complex entities. These types are also called **reference types** because they store references to the memory location of the data rather than the actual data.

---

## **Non-Primitive Types in JavaScript**

JavaScript has one non-primitive data type: **Object**. However, various forms of objects fall under this category:

---

## **1. Object**

- **Description**: A collection of key-value pairs where keys can be strings or symbols, and values can be any data type (including other objects).
- **Examples**:

  ```javascript
  let person = {
    name: "John",
    age: 30,
    isEmployed: true,
  };

  console.log(person.name); // Outputs: John
  ```

- **Key Points**:
  - Objects are mutable and can be modified even after creation.
  - Objects can be created using:
    - Object literal syntax (`{}`).
    - Constructor functions (e.g., `new Object()`).

---

## **2. Array**

- **Description**: A special type of object used to store ordered collections of data (indexed by integers).
- **Examples**:
  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits[1]); // Outputs: banana
  ```
- **Key Points**:
  - Arrays are zero-indexed.
  - Common methods: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.map()`, `.filter()`, etc.
  - Arrays are technically objects, and `typeof fruits` returns `"object"`.

---

## **3. Function**

- **Description**: A block of reusable code that can be executed when called.
- **Examples**:
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Outputs: Hello, Alice!
  ```
- **Key Points**:
  - Functions are objects and can have properties and methods.
  - Can be created using function declarations, expressions, or arrow functions.

---

## **4. Date**

- **Description**: An object for working with dates and times.
- **Examples**:
  ```javascript
  let now = new Date();
  console.log(now.toDateString()); // Outputs: Current date in a readable format
  ```
- **Key Points**:
  - Provides methods for date manipulation like `.getFullYear()`, `.getMonth()`, `.getDay()`, etc.

---
