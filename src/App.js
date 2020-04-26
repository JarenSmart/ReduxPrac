import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts";

function App() {
  return (
    <div className="Total-App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Welcome to React</span>
        </header>
      </div>
      <Posts />
    </div>
  );
}

export default App;
