# `async`, `await`, and `Promise.all` in JavaScript

#### **Introduction**

In JavaScript, `async` and `await` are used to handle asynchronous operations more efficiently, making the code easier to write and read. `Promise.all` is used when you need to run multiple promises concurrently and wait for all of them to complete.

---

## **`async` and `await`**

`async` and `await` are built on top of promises and provide a cleaner syntax to work with asynchronous code.

### **`async` Functions**

- An `async` function always returns a promise.
- It allows the use of `await` inside it.

### **Syntax**

```javascript
async function functionName() {
  // Your code here
}
```

### **`await` Keyword**

- The `await` keyword can only be used inside `async` functions.
- It pauses the execution of the `async` function until the promise resolves or rejects.

### **Example**

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

In this example, the `fetchData` function waits for the fetch call to complete before moving on to the next line.

---

## **`Promise.all`**

`Promise.all` is used when you want to run multiple promises concurrently and wait for all of them to resolve. It returns a single promise that resolves when all of the promises passed to it have resolved or rejects if any of the promises are rejected.

### **Syntax**

```javascript
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // handle results
  })
  .catch((error) => {
    // handle error
  });
```

### **Example**

```javascript
const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

Promise.all([promise1, promise2])
  .then(async ([response1, response2]) => {
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(data1, data2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

In this example, `Promise.all` waits for both fetch calls to complete and then processes their results.

---

## **When to Use `Promise.all`**

- When you need to perform multiple asynchronous operations simultaneously.
- When the operations are independent of each other but you need all results before proceeding.

---

### **Summary**

- **`async` and `await`** provide a cleaner way to work with asynchronous code compared to traditional promises.
- **`Promise.all`** allows you to wait for multiple promises to complete before executing further code.

Would you like to see more examples or explanations about these concepts? 😊
