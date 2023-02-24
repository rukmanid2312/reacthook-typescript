import React, { memo } from "react";
import { ToDo } from "./Container";

type ToDoPropType = {
  todos: ToDo[];
  addTodo: () => void;
};
const ToDos = (prop: ToDoPropType) => {
  const { todos, addTodo } = prop;
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={todo.id}>{todo.name}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
export default memo(ToDos);
