import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    if (count >= 20) return;
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React useState Hook - Counter Project</h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
