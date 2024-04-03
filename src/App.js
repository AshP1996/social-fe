// import react and routers
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import pages
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";
// import css
import "./App.css";


// Assume currentUser is obtained from some authentication context
const currentUser = true;


// ProtectedRoute component to handle authentication
const ProtectedRoute = ({ route }) => {
  // if current user is null redirect to login 
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  // else redirect to the original route
  return route;
};


// App component
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
