import React, { useContext } from "react";
import { CounterContext, useCounter } from "./CounterContext";
const AddButton = () => {
  const { counter, increment } = useCounter();
  const clickHandler = () => {
    increment();
  };
  return <button onClick={clickHandler}>Add</button>;
};
export default AddButton;
