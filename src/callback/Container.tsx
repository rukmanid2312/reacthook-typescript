import React, { useCallback, useState } from "react";
import ToDos from "./ToDos";

export type ToDo = {
  id: number;
  name: string;
};
let todoslist = [
  { id: 1, name: "eat" },
  { id: 2, name: "run" },
];
const Container = () => {
  const [todos, setTodos] = useState<ToDo[]>([...todoslist]);
  const [count, setCount] = useState<number>(0);

  const addToDo = () => {
    setTodos([...todos, { id: 3, name: "walk" }]);
  };

  /*const addToDo = useCallback((): void => {
    setTodos([...todos, { id: 3, name: "walk" }]);
  }, [todos]);*/
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <ToDos todos={todos} addTodo={addToDo} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
export default Container;
