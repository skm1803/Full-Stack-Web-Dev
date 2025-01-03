# JavaScript Loops

Loops are fundamental in JavaScript for automating repetitive tasks. Below are the different types of loops available in JavaScript:

---

## **1. for Loop**

- **Description**: Executes a block of code a specific number of times.
- **Syntax**:
  ```javascript
  for (initialization; condition; increment / decrement) {
    // Code to execute
  }
  ```
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
  }
  ```

---

## **2. while Loop**

- **Description**: Executes a block of code as long as the specified condition is true.
- **Syntax**:
  ```javascript
  while (condition) {
    // Code to execute
  }
  ```
- **Example**:
  ```javascript
  let count = 0;
  while (count < 3) {
    console.log("Count is:", count);
    count++;
  }
  ```

---

## **3. do...while Loop**

- **Description**: Executes a block of code at least once, and then repeatedly executes the block as long as the condition is true.
- **Syntax**:
  ```javascript
  do {
    // Code to execute
  } while (condition);
  ```
- **Example**:
  ```javascript
  let number = 0;
  do {
    console.log("Number is:", number);
    number++;
  } while (number < 3);
  ```

---

## **4. for...of Loop**

- **Description**: Iterates over iterable objects like arrays, strings, or sets, providing the values of the iterable.
- **Syntax**:
  ```javascript
  for (let variable of iterable) {
    // Code to execute
  }
  ```
- **Example**:
  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  for (let fruit of fruits) {
    console.log(fruit);
  }
  ```

---

## **5. for...in Loop**

- **Description**: Iterates over the enumerable properties of an object, providing the property keys.
- **Syntax**:
  ```javascript
  for (let key in object) {
    // Code to execute
  }
  ```
- **Example**:
  ```javascript
  let person = { name: "John", age: 30, job: "Developer" };
  for (let key in person) {
    console.log(key, ":", person[key]);
  }
  ```

---

## **6. break and continue**

- **`break`**: Exits the loop prematurely when a specific condition is met.
- **`continue`**: Skips the current iteration and moves to the next one.
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // Exits the loop when i equals 3
    }
    if (i === 1) {
      continue; // Skips the iteration when i equals 1
    }
    console.log(i);
  }
  ```

---

## **Best Practices for Using Loops**

1. Use meaningful variable names in loops.
2. Avoid infinite loops by ensuring the loop condition will eventually evaluate to `false`.
3. Use `for...of` and `for...in` for readability when dealing with arrays or objects.
4. Leverage `break` and `continue` judiciously to make code logic clear.

---
