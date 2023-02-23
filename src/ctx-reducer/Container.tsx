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
  const { state, dispatch } = useCounter();
  return (
    <div>
      <div>{`Counter:${state.count}`}</div>
      <AddButton />
    </div>
  );
};
export default Container;
