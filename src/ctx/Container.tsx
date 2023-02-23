import React, {
  useState,
  createContext,
  ReactNode,
  ReactElement,
  useContext,
} from "react";
import AddButton from "./AddButton";
import { CounterContext, CounterProvider, useCounter } from "./CounterContext";

const Container = () => {
  const { counter } = useCounter();
  return (
    <div>
      <div>{`Counter:${counter}`}</div>
      <AddButton />
    </div>
  );
};
export default Container;
