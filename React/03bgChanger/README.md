# React Background Changer with `useState` Hook

## Overview

This project is a simple React application that changes the background color of the screen when a button is clicked. The project uses the `useState` hook to store and update the background color dynamically.

---

## Project Summary

In this project, we create three buttons—**Red**, **Green**, and **Blue**—that allow the user to change the background color of the page by clicking the respective button.

### Key Components

1. **`useState` Hook**: Used to store and update the background color based on user interaction.
2. **Dynamic Styling**: The background color is applied inline, updating instantly when the state changes.
3. **Button Click Handlers**: Each button has an `onClick` handler that sets a specific color in the state.

### Code Explanation

```javascript
import { useState } from "react";

function App() {
  // Initialize color state with "olive" as the default color
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Button to change background to red */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          {/* Button to change background to green */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          {/* Button to change background to blue */}
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
```
