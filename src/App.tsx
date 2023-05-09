import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>PROG8185 Web Technologies</h1>
        <h2>Dr. Salah Rabba</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </>
    );
  }
}

export default App;
