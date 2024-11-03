# React Props - Card Component Project

## Overview

In this project, I'm learning about **props** in React. Props (short for "properties") are an essential part of React components, allowing us to pass data between components. They enable us to make components more flexible and reusable by giving them the ability to receive data dynamically.

---

## What are Props?

In React, **props** are read-only objects that allow us to pass data from one component to another, usually from a parent to a child component. This data flow enables us to create customizable and dynamic components that can behave differently based on the props they receive.

### Why do we need Props?

Props are crucial for building reusable and flexible components. Without props, components would be isolated and static, making it difficult to create dynamic UIs. Props provide a way to pass data and event handlers to components, making it easy to control component behavior based on external inputs.

---

## What problem do Props solve?

Props solve the problem of hardcoding data inside components, which makes them inflexible and less reusable. By using props, we can create components that adjust their content and behavior based on the data they receive. This allows for more modular and maintainable code, as we can reuse the same component in different contexts with different data.

---

## Card Component Project

In this project, we’re building a **Card** component that receives `username` and `btnText` as props. The `username` prop displays a user’s name on the card, while the `btnText` prop customizes the button text.

### Card Component Code

```javascript
import React from "react";

function Card({ username, btnText = "visit me" }) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="User Avatar"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
```
