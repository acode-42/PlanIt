import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
          timestamp: new Date().toLocaleString(), // Store current date and time
        }
      ]);
      setNewTodo('');
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter uncompleted tasks for modal
  const openModal = () => {
    setCompletedTasks(todos.filter(todo => !todo.completed));
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => setShowModal(false);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand"><b>PlanIt</b></div>
        <div className="navbar-links">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="navbar-link" onClick={openModal}>Your Tasks</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Todo List</h1>

        {/* Todo Input */}
        <div className="todo-input">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <div className="todo-item-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span>{todo.text}</span>
                <span className="todo-timestamp">{todo.timestamp}</span> {/* Display Timestamp */}
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Uncompleted Tasks */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Uncompleted Tasks</h2>
            <ul>
              {completedTasks.length > 0 ? (
                completedTasks.map(todo => (
                  <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button
                      className="mark-completed-btn"
                      onClick={() => toggleComplete(todo.id)}
                    >
                      Mark as Completed
                    </button>
                  </li>
                ))
              ) : (
                <p>No uncompleted tasks.</p>
              )}
            </ul>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
