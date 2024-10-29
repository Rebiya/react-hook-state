// IncreaseDecreaseCount.js
import React, { useState } from "react";

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prevCount) => prevCount + 1);

  const decrease = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default IncreaseDecreaseCount;
// useState manages the state variable for the click count.
// useEffect manages side effects, such as changing the document
