import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="app-header">a heading</header>
        <div className="app-body">
          <main className="app-main">app-main</main>
          <aside className="app-aside">app-aside</aside>
        </div>
      </div>
    );
  }
}

export default App;
