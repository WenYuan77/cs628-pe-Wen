import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, removeTask }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        todos.map((todo, index) => (
          <ToDoItem key={index} index={index} task={todo} removeTask={removeTask} />
        ))
      )}
    </div>
  );
}
