import { Provider } from "react-redux";
import { createStore } from "./redux/store";
import IndexPage from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Provider store={createStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
