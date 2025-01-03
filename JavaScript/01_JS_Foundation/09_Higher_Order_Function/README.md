# Higher-Order Functions in JavaScript

---

## **Definition**

A higher-order function is a function that either:

1. Takes one or more functions as arguments (parameters).
2. Returns a function as its result.

This powerful concept is a core feature of JavaScript, allowing for greater abstraction and flexibility in writing reusable code.

---

## **Examples of Higher-Order Functions**

### **1. Functions as Arguments**

Higher-order functions can take other functions as arguments to process data or control behavior.

**Example**:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet);
// Output: Hello, Alice!
```

---

### **2. Functions as Return Values**

A higher-order function can return another function, enabling the creation of dynamic and flexible logic.

**Example**:

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15
```

---

## **Built-In Higher-Order Functions**

### **1. `map()`**

- Creates a new array by applying a provided function to each element in the original array.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

### **2. `filter()`**

- Returns a new array containing only elements that meet a specific condition.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const even = numbers.filter((num) => num % 2 === 0);
  console.log(even); // Output: [2, 4]
  ```

### **3. `reduce()`**

- Applies a function against an accumulator and each element in the array to reduce it to a single value.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  console.log(sum); // Output: 10
  ```

### **4. `forEach()`**

- Executes a provided function once for each array element.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  numbers.forEach((num) => console.log(num * 2));
  // Output:
  // 2
  // 4
  // 6
  ```

### **5. `sort()`**

- Sorts the elements of an array in place and can use a custom comparison function.
- **Example**:
  ```javascript
  const numbers = [3, 1, 4, 1, 5];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [1, 1, 3, 4, 5]
  ```

---

## **Advantages of Higher-Order Functions**

1. **Reusability**: Code can be reused across different contexts.
2. **Modularity**: Functions can be composed together for complex operations.
3. **Readability**: Simplifies logic by abstracting repetitive tasks.

---
