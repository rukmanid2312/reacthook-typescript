import React from "react";

export type CounterState = {
  count: number;
};
export type ACTION_TYPE = {
  type: string;
};

const CounterReducer = (
  state: CounterState,
  action: ACTION_TYPE
): CounterState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};
export default CounterReducer;
