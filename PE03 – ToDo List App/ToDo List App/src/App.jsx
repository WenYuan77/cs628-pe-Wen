import React, { useState } from "react";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([]); // 存储任务列表
  const [task, setTask] = useState("");   // 输入框状态

  // 处理输入框变化
  const handleChange = (e) => setTask(e.target.value);

  // 添加任务
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // 清空输入框
    }
  };

  // 删除任务
  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ToDo List App</h1>
      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={handleChange}
      />
      <button onClick={addTask}>Add Task</button>
      <ToDoList todos={todos} removeTask={removeTask} />
    </div>
  );
}
