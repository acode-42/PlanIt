import React from "react";
import "./Navbar.css";

function Navbar({ toggleTheme, openModal }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TodoApp</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#your-tasks" onClick={openModal}>Your Tasks</a>
      </div>

    </nav>
  );
}

export default Navbar;
