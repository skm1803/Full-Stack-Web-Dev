# React useState Hook - Counter Project

## Overview

In this project, I'm learning about React's `useState` hook, which is one of the fundamental hooks in React. The `useState` hook is essential for managing state in functional components, allowing us to add, modify, and use state without needing to convert the component into a class.

---

## What is `useState`?

The `useState` hook is a function that lets us add state to our functional components. In React, "state" refers to a piece of data that changes over time, often in response to user actions or other events. Unlike class components, which have a built-in state management system, functional components rely on hooks like `useState` for this capability.

### Why do we need `useState`?

Before React introduced hooks, managing state in functional components was not possible directly. With `useState`, functional components can now hold and manage their own state, making code cleaner and easier to maintain. This is especially useful for small, focused components that may need to change in response to user interactions, like toggling a button, input changes, or in this case, a counter.

---

## What problem does `useState` solve?

The `useState` hook solves the problem of having to rewrite a component as a class just to manage its state. It provides a simple and efficient way to create, update, and use state directly within a functional component, making it faster to write and easier to understand. With `useState`, we can keep track of data (state) and make our components interactive.

---

## Counter Project

In this project, we’re building a simple counter with two buttons: **Increment** and **Decrement**. Each button will update the count by 1 when clicked.

---

### Code Example

```javascript
import React, { useState } from "react";

function Counter() {
  // Declare a new state variable, "count", and set it to 0 initially
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
