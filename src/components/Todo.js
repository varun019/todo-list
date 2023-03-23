import React, { useState } from "react";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue
}) => {
  return todos.map((todo) => (
    <div className="todo-row text-center">
      {editId === todo.id ? (
        <input className="ms-3"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <div
          key={todo.id}
          className={todo.isComplete ? "complete" : ""}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.text}
        </div>
      )}
      {editId === todo.id ? (
        <button className='btn btn-primary ms-3' onClick={() => editTodo(todo.id, inputValue)}>Edit todo</button>
      ) : (
        <>
        <div className="btn-group">
          <i className="fa-solid fa-trash me-2 cursor-pointer" onClick={() => removeTodo(todo.id)}></i>
          <i className="fa-solid fa-pen-to-square cursor-pointer" onClick={() => handleEditChange(todo.id, todo.text)}></i>
          </div>
        </>
      )}
    </div>
  ));
};

export default Todo;
