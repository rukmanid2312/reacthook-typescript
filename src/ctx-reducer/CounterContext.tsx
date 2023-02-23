import React, {
  createContext,
  useState,
  ReactNode,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import CounterReducer, { CounterState, ACTION_TYPE } from "./CounterReducer";
export type CounterContextProps = {
  state: CounterState;
  dispatch: React.Dispatch<ACTION_TYPE>;
};
const INITIAL_STATE = { count: 0 };
export const CounterContext = createContext<CounterContextProps>({
  state: INITIAL_STATE,
  dispatch: () => {},
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
  const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  return (
    <CounterContext.Provider {...props} value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
