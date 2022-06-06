import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Register from "./components/Register";
import Signin from "./components/Signin";
import history from "./components/History";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes history={history}>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-in" element={<Signin />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
