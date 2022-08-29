import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoHead.scss";
import {
  setInputValue,
  addTodo,
  hideCompletedTodos,
} from "../../redux/slices/todosSlice";

const TodoHead = () => {
  const inputValue = useSelector((state) => state.todos.todosInputValue);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onAdd = useCallback(() => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      dispatch(dispatch(setInputValue("")));
    }
  }, [dispatch, inputValue]);

  return (
    <>
      <div className="todo-head">
        <input
          maxLength={40}
          className="todo-head-input"
          type="text"
          placeholder="Write your todo..."
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
          onKeyDown={(e) => e.keyCode === 13 && onAdd()}
        />
        <button className="todo-head-button" onClick={() => onAdd()}>
          Add
        </button>
      </div>
      <h2>
        {todos.filter((todo) => todo.isDone === true).length}/{todos.length}{" "}
        Completed
      </h2>
      <input
        type="checkbox"
        id="hide"
        className="hide-checkbox"
        onChange={() => {
          dispatch(hideCompletedTodos());
        }}
      />
      <label htmlFor="hide">Hide Completed</label>
    </>
  );
};

export default TodoHead;
