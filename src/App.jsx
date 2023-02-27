import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  hotelColumns,
  roomColumns,
  userColumns,
} from "./assets/datatableSource";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import LoginPage from "./pages/login";
import NewHotelPage from "./pages/newHotel";
import NewRoomPage from "./pages/newRoom";
import NewUserPage from "./pages/newUser";
import SinglePage from "./pages/single";
import "./styles/theme.scss";
import { Navigate } from "react-router-dom";

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
                    <ListPage columns={userColumns} />
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
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListPage columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":hotelId"
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
                    <NewHotelPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Rooms Route */}

            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListPage columns={roomColumns} />
                  </ProtectedRoute>
                }
              />

              <Route
                path=":roomId"
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
                    <NewRoomPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
