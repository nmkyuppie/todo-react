import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header></Header>
        <Input></Input>
      </div>
    </Provider>
  );
}

export default App;
