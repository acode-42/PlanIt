import React from "react";
import './TodoList.css'

function TodoList({ tasks, onDelete }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className={`todo-item ${task.completed ? "completed" : ""}`}>
          <span>{task.text}</span>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
