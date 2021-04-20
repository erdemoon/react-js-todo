import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteHandler = () => {
    setIsDeleting(true);
  };

  const animationEndHandler = (e) => {
    if (e.target.className.includes("todo")) {
      setTodos(todos.filter((el) => el.id !== todo.id));
    }
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div
      className={`todo ${isDeleting ? "fall" : ""}`}
      onTransitionEnd={animationEndHandler}
    >
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
