import { FC } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import TodoBody from "./components/todoBody/TodoBody";
import TodoHead from "./components/todoHead/TodoHead";
import store from "./redux/store/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoHead />
        <TodoBody />
      </div>
    </Provider>
  );
};

export default App;
