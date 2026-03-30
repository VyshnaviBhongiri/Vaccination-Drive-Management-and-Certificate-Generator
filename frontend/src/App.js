import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Administer from "./pages/Administer";
import Certificate from "./pages/Certificate";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* NAVBAR */}
        <div className="navbar">
          <h1>💉 Vaccination System</h1>

          <div className="nav-links">
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/administer">Administer</Link>
            <Link to="/certificate">Verify</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
         <div className="hero">
        <h2>Smart Vaccination Management System</h2>
         <p>Secure • Digital • QR Verified Certificates</p>
         </div>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/administer" element={<Administer />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;