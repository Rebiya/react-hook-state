import React, { useState, useEffect } from "react";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    alert("Component is mounted");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Click Count: {count}</p>
    </div>
  );
};

export default UseEffectForTitle;
