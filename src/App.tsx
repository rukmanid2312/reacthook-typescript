import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
//import Container from "./ctx/Container";
import { CounterProvider } from "./ctx/CounterContext";
import Container from "./callback/Container";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
