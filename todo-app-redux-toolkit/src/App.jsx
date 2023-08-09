import "bootstrap/dist/css/bootstrap.css";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
