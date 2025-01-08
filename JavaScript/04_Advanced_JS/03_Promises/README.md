# Promises and Promise Chaining in JavaScript

#### **Introduction to Promises**

A **Promise** in JavaScript represents a value that may be available now, in the future, or never. It is used to handle asynchronous operations and provides a cleaner, more readable alternative to callbacks.

---

## **1. Creating a Promise**

A Promise is created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`.

### **Example**

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((message) => {
    console.log(message); // Output: Promise resolved!
  })
  .catch((error) => {
    console.error(error);
  });
```

- **`resolve`**: Function to call when the operation is successful.
- **`reject`**: Function to call when the operation fails.

---

## **2. Promise States**

A Promise can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation was successful (`resolve` is called).
- **Rejected**: The operation failed (`reject` is called).

---

## **3. Promise Chaining**

**Promise chaining** allows multiple asynchronous operations to be performed one after another. Each `.then()` returns a new promise, allowing chaining.

### **Example: Simple Chaining**

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // Resolves after 1 second
})
  .then((result) => {
    console.log(result); // Output: 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // Output: 2
    return result * 3;
  })
  .then((result) => {
    console.log(result); // Output: 6
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## **4. Error Handling in Chaining**

Errors in any part of the chain will skip to the nearest `.catch()`.

### **Example**

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Start"), 1000);
})
  .then((result) => {
    console.log(result); // Output: Start
    throw new Error("Something went wrong!");
  })
  .then((result) => {
    console.log(result); // This will not execute
  })
  .catch((error) => {
    console.error(error.message); // Output: Something went wrong!
  });
```

---

## **5. Using `finally`**

The `finally` method executes code after the promise is settled, regardless of whether it was resolved or rejected.

### **Example**

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operation successful"), 1000);
})
  .then((message) => {
    console.log(message); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Cleanup tasks");
  });
```

---

## **Summary**

- **Promises** provide a more readable way to handle asynchronous operations compared to callbacks.
- **Promise chaining** enables a sequence of asynchronous tasks.
- **Error handling** in promises is straightforward with `.catch()`.
- **`finally`** is useful for cleanup tasks that need to run regardless of the promise's outcome.
