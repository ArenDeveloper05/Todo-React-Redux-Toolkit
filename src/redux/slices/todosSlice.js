import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosInputValue: "",
  todos: [
    { id: 1, title: "First Todo", isDone: true, isHide: false },
    { id: 2, title: "Second Todo", isDone: false, isHide: false },
  ],
  isModalOpen: false,
};
const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos = [
        ...state.todos,
        {
          id: Math.random(),
          title: payload,
          isDone: false,
          idHide: false,
        },
      ];
    },
    removeTodo(state, { payload }) {
      console.log("jnjeci", payload);
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    setInputValue(state, { payload }) {
      console.log("avelacri");
      state.todosInputValue = payload;
    },
    setIsModalOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    doneTodo(state, { payload }) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
    hideCompletedTodos(state, { payload }) {
      state.todos = state.todos.map((todo) => {
        if (todo.isDone) {
          todo.isHide = !todo.isHide;
        }
        return todo;
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  setInputValue,
  setIsModalOpen,
  doneTodo,
  hideCompletedTodos,
} = todosSlice.actions;
export default todosSlice.reducer;
