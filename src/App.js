import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Pokedex />
      </div>
    );
  }
}

export default App;
