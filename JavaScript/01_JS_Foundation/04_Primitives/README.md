# JavaScript Primitives

## **What Are Primitives?**

Primitives are the most basic data types in JavaScript. They are immutable (cannot be altered) and are not objects. These types represent single values rather than collections of data.

JavaScript has **7 primitive data types**:

---

## **1. String**

- **Description**: Represents textual data enclosed in single (`'`), double (`"`), or backticks (`` ` ``).
- **Examples**:
  ```javascript
  let name = "John"; // Double quotes
  let greeting = "Hi"; // Single quotes
  let message = `Hello, ${name}!`; // Template literal
  ```
- **Key Points**:
  - Strings are immutable. Once created, their value cannot be changed (operations like concatenation create a new string).
  - Useful methods include `.length`, `.toUpperCase()`, `.toLowerCase()`, `.slice()`, and `.replace()`.

---

## **2. Number**

- **Description**: Represents numeric values, both integers and floating-point.
- **Examples**:
  ```javascript
  let age = 25; // Integer
  let pi = 3.14159; // Float
  let notANumber = NaN; // Special numeric value
  ```
- **Key Points**:
  - Includes special values like `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).
  - Common methods include `Math` functions like `Math.round()`, `Math.random()`, and `Math.pow()`.

---

## **3. BigInt**

- **Description**: Represents integers larger than the `Number` type can handle (values greater than \(2^{53} - 1\) or less than \(-2^{53} + 1\)).
- **Examples**:
  ```javascript
  let bigNumber = 123456789012345678901234567890n; // BigInt
  ```
- **Key Points**:
  - BigInt values are created by appending an `n` to the end of the number.
  - Cannot be mixed directly with `Number` types.

---

## **4. Boolean**

- **Description**: Represents logical values, either `true` or `false`.
- **Examples**:
  ```javascript
  let isLoggedIn = true;
  let hasAccess = false;
  ```
- **Key Points**:
  - Commonly used in conditional statements like `if` and `while`.
  - Can be derived from expressions (e.g., `10 > 5` evaluates to `true`).

---

## **5. Undefined**

- **Description**: Represents a variable that has been declared but not yet assigned a value.
- **Examples**:
  ```javascript
  let x; // Undefined
  console.log(x); // Outputs: undefined
  ```
- **Key Points**:
  - Default value of uninitialized variables.
  - Not the same as `null`.

---

## **6. Null**

- **Description**: Represents the intentional absence of any object value.
- **Examples**:
  ```javascript
  let emptyValue = null;
  console.log(emptyValue); // Outputs: null
  ```
- **Key Points**:
  - Explicitly set by the developer to indicate "no value."
  - `typeof null` returns `"object"`, which is a known quirk in JavaScript.

---

## **7. Symbol**

- **Description**: Represents a unique and immutable value, often used as object property keys.
- **Examples**:
  ```javascript
  let uniqueId = Symbol("id");
  console.log(uniqueId); // Symbol(id)
  ```
- **Key Points**:
  - Each symbol is unique, even if they have the same description.
  - Symbols are primarily used to avoid property name collisions in objects.

---

## **Characteristics of Primitives**

1. **Immutability**:
   - Primitives cannot be changed; operations on them return a new value.
   - Example:
     ```javascript
     let str = "hello";
     str[0] = "H"; // Does nothing
     console.log(str); // "hello"
     ```
2. **Pass by Value**:
   - Primitives are copied when assigned or passed to functions.
   - Example:
     ```javascript
     let a = 10;
     let b = a;
     b = 20;
     console.log(a); // 10
     ```

---

## **Primitive Wrappers**

Even though primitives are not objects, JavaScript provides temporary wrapper objects for accessing methods.

- **Example**:
  ```javascript
  let str = "hello";
  console.log(str.toUpperCase()); // "HELLO"
  ```
  Behind the scenes, JavaScript wraps `str` with a `String` object, performs the operation, and then discards the object.

---

## **Difference Between `null` and `undefined`**

| Feature         | `null`                       | `undefined`                           |
| --------------- | ---------------------------- | ------------------------------------- |
| **Meaning**     | Intentional absence of value | Variable is declared but not assigned |
| **Type**        | `object`                     | `undefined`                           |
| **Assigned By** | Developer                    | JavaScript engine                     |

---
