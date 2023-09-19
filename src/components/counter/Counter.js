import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="Counter">
      <h1>Counter</h1>
      <p>Count: {count} </p>
      <button onClick={increment}> Click </button>
    </div>
  );
}
