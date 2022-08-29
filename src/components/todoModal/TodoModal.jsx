import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./TodoModal.scss";
import { setIsModalOpen, removeTodo } from "../../redux/slices/todosSlice";

const TodoModal = ({ title, id }) => {
  const dispatch = useDispatch();
  const onClose = useCallback(
    (id) => {
      dispatch(removeTodo(id));
      dispatch(setIsModalOpen());
    },
    [dispatch]
  );
  return (
    <div className="todo-delete">
      <div className="todo-delete-modal">
        <h1>
          Delete Todo <span>{title}</span> ?
        </h1>
        <p>Are you sure you want to delete your todo?</p>
        <div className="todo-delete-modal-buttons">
          <button
            className="todo-delete-modal-buttons-cancel"
            onClick={() => dispatch(setIsModalOpen())}
          >
            Cancel
          </button>
          <button
            className="todo-delete-modal-buttons-delete"
            onClick={() => onClose(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
