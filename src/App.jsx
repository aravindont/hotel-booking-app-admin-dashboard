import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import LoginPage from "./pages/login";
import NewPage from "./pages/new";
import SinglePage from "./pages/single";
import "./styles/theme.scss";
function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
