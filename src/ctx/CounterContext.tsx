import React, {
  createContext,
  useState,
  ReactNode,
  ReactElement,
  useContext,
} from "react";
export type CounterContextProps = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};
export const CounterContext = createContext<CounterContextProps>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useContext must beused within servicecontext provider");
  }
  return context;
};
export const CounterProvider = (props: {
  children: ReactNode;
}): ReactElement => {
  const [counter, setCounter] = useState<number>(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <CounterContext.Provider
      {...props}
      value={{ counter, increment, decrement }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
