import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoBody.scss";
import { AiTwotoneDelete, AiOutlineFileDone } from "react-icons/ai";
import { setIsModalOpen, doneTodo } from "../../redux/slices/todosSlice";
import TodoModal from "../todoModal/TodoModal";

const TodoBody = () => {
  const todos = useSelector((state) => state.todos.todos);
  const isModalOpen = useSelector((state) => state.todos.isModalOpen);
  const dispatch = useDispatch();

  const [modalText, setModalText] = useState("");
  const [modalId, setModalId] = useState(0);

  const onChangeModalState = useCallback(
    (title, id) => {
      dispatch(setIsModalOpen());
      setModalText(title);
      setModalId(id);
    },
    [dispatch]
  );

  return (
    <div className="todo-body">
      {todos.length !== 0 &&
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className={todo.isHide ? "hide todo-body-item" : "todo-body-item"}
            >
              <h3 style={todo.isDone ? { color: "green" } : undefined}>
                {todo.title}
              </h3>
              <AiTwotoneDelete
                style={{ fontSize: "30px" }}
                className="icon-del"
                onClick={() => onChangeModalState(todo.title, todo.id)}
              />

              <AiOutlineFileDone
                style={{ fontSize: "30px" }}
                className="icon-done"
                onClick={() => dispatch(doneTodo(todo.id))}
              />
            </div>
          );
        })}
      {isModalOpen && <TodoModal title={modalText} id={modalId} />}
    </div>
  );
};

export default TodoBody;
