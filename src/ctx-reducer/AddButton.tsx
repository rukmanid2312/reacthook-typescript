import React, { useContext } from "react";
import { CounterContext, useCounter } from "./CounterContext";
const AddButton = () => {
  const { dispatch } = useCounter();
  const clickHandler = () => {
    dispatch({ type: "ADD" });
  };
  return <button onClick={clickHandler}>Add</button>;
};
export default AddButton;
