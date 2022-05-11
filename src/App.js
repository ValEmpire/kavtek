import { Provider } from "react-redux";
import { createStore } from "./redux/store";
import "./App.css";

function App() {
  return <Provider store={createStore()}></Provider>;
}

export default App;
