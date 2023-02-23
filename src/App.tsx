import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Container from "./ctx-reducer/Container";
import { CounterProvider } from "./ctx-reducer/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Login />
        <Container />
      </CounterProvider>
    </div>
  );
}

export default App;
