import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/ducks" element={<Ducks />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="registerContainer">
            <Register />
          </div>
        }
      />
      <Route
        path="*"
        element={
          isLoggedIn ? (
            <Navigate to="/ducks" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
