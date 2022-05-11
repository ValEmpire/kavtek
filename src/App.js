import { Provider } from "react-redux";
import { createStore } from "./redux/store";
import "./App.css";
import IndexPage from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={createStore()}>
      <ThemeProvider theme={theme}>
        <IndexPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
