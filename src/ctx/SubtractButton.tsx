import React, { useContext } from "react";
import { CounterContext, useCounter } from "./CounterContext";
const SubtractButton = () => {
  const { counter, increment, decrement } = useCounter();
  const clickHandler = () => {
    decrement();
  };
  return <button onClick={clickHandler}>Subtract</button>;
};
export default SubtractButton;
