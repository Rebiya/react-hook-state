import React from "react";
import MyCounter from "./components/MyCounter";
import IncreaseDecreaseCount from "./components/IncreaseDecreaseCount";
import UseEffectForTitle from "./components/UseEffectForTitle";

const App = () => {
  return (
    <div>
      <h1>React States and Hooks Practice</h1>
      <MyCounter />
      <IncreaseDecreaseCount />
      <UseEffectForTitle />
    </div>
  );
};

export default App;
