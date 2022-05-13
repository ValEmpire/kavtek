import { Provider } from "react-redux";
import { createStore } from "./redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import UsersPage from "./pages/users";
import UserDetailPage from "./pages/users/details";
import SuccessPage from "./pages/success";

import "./App.css";

function App() {
  return (
    <Provider store={createStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/details" element={<UserDetailPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
