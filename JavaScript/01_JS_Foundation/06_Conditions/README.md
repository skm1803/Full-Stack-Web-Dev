# JavaScript Conditions

Conditions in JavaScript are used to execute different blocks of code based on specific criteria. They are fundamental for decision-making and flow control in a program.

---

## **Conditional Statements in JavaScript**

### **1. if Statement**

- **Description**: Executes a block of code if the specified condition evaluates to `true`.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to execute if the condition is true
  }
  ```
- **Example**:
  ```javascript
  let age = 18;
  if (age >= 18) {
    console.log("You are eligible to vote.");
  }
  ```

---

### **2. if-else Statement**

- **Description**: Executes one block of code if the condition evaluates to `true`, and another block if it evaluates to `false`.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to execute if the condition is true
  } else {
    // code to execute if the condition is false
  }
  ```
- **Example**:
  ```javascript
  let age = 16;
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
  ```

---

### **3. if-else if-else Statement**

- **Description**: Used to test multiple conditions. The first block of code with a `true` condition will execute.
- **Syntax**:
  ```javascript
  if (condition1) {
    // code to execute if condition1 is true
  } else if (condition2) {
    // code to execute if condition2 is true
  } else {
    // code to execute if none of the above conditions are true
  }
  ```
- **Example**:
  ```javascript
  let marks = 85;
  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 75) {
    console.log("Grade: B");
  } else {
    console.log("Grade: C");
  }
  ```

---

### **4. switch Statement**

- **Description**: Evaluates an expression and matches its value against multiple case labels. Executes the matched block of code.
- **Syntax**:
  ```javascript
  switch (expression) {
    case value1:
      // code to execute if expression === value1
      break;
    case value2:
      // code to execute if expression === value2
      break;
    default:
    // code to execute if no match is found
  }
  ```
- **Example**:
  ```javascript
  let day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of the work week.");
      break;
    case "Friday":
      console.log("End of the work week.");
      break;
    default:
      console.log("Mid-week.");
  }
  ```

---

### **5. Ternary Operator**

- **Description**: A shorthand for `if-else` statements. It uses the syntax: `condition ? expressionIfTrue : expressionIfFalse`.
- **Syntax**:
  ```javascript
  let result = condition ? expressionIfTrue : expressionIfFalse;
  ```
- **Example**:
  ```javascript
  let age = 20;
  let eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
  console.log(eligibility);
  ```

---

### **6. Logical Operators in Conditions**

- **Description**: Combine or modify conditions using logical operators.
  - `&&` (AND): All conditions must be true.
  - `||` (OR): At least one condition must be true.
  - `!` (NOT): Negates the condition.
- **Examples**:

  ```javascript
  let age = 25;
  let isCitizen = true;

  // AND operator
  if (age >= 18 && isCitizen) {
    console.log("Eligible to vote.");
  }

  // OR operator
  if (age < 18 || !isCitizen) {
    console.log("Not eligible to vote.");
  }

  // NOT operator
  if (!isCitizen) {
    console.log("You must be a citizen to vote.");
  }
  ```

---

## **Best Practices for Using Conditions**

1. **Use meaningful conditions**:

   ```javascript
   // Instead of this
   if (x === 0) {
     // ...
   }

   // Use this
   if (isAvailable) {
     // ...
   }
   ```

2. **Minimize nesting**: Use early returns in functions to reduce deeply nested `if-else` blocks.
3. **Leverage ternary operators**: For concise one-liner conditions, use ternary operators.
4. **Avoid redundancy**: Simplify conditions where possible.

---
