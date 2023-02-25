import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import LoginPage from "./pages/login";
import NewUserPage from "./pages/newUser";
import SinglePage from "./pages/single";
import "./styles/theme.scss";
function App() {
  const { darkMode } = useContext(ThemeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* login route */}
            <Route path="login" element={<LoginPage />} />
            {/* home page route */}
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            {/* users routes */}
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <SinglePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewUserPage />
                  </ProtectedRoute>
                }
              />
              <Route />
            </Route>

            {/* hotels routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
