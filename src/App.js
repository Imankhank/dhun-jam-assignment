import MainRoute from "./routes/routes";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
