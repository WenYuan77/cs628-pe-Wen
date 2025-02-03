import React from "react";

export default function ToDoItem({ task, index, removeTask }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px auto", width: "50%", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <span>{task}</span>
      <button style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }} onClick={() => removeTask(index)}>
        Delete
      </button>
    </div>
  );
}
