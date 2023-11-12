import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";
import Header from "./components/layouts/Header";
import PrivateRoute from "./components/auth/PrivateRoute";
import CreateListing from "./components/pages/CreateListing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/create-listing" element={<CreateListing />} />
      </Routes>
    </Router>
  );
}

export default App;
