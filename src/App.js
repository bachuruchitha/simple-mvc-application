import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserExist from "./Components/Home";
import Welcome from "./Components/Welcome";
import { Container } from "reactstrap";
import { Button } from "reactstrap";
function App() {
  // console.log(localStorage.getItem("authenticated"));
  const [userstate, setUserState] = useState({});

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
