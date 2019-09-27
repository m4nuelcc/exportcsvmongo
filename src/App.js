import React, { Component } from "react";
// import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import { mongo } from "./index";
import clientes from "./clientes.json";

function App() {
  return (
    <div className="App">
      <Grabar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

export class Grabar extends React.Component {
  state = {
    clientes: clientes
  };

  grabar = () => {
    mongo
      .db("caja")
      .collection("borrar")
      .insertMany(this.state.clientes);
  };

  render() {
    return (
      <div>
        <span
          onClick={e => {
            document.getElementById("mimodal").style = "display: block";
          }}
        ></span>
        <div id="mimodal" className="modal2">
          <button onClick={this.grabar}>Grabar</button>

          <pre>{JSON.stringify(this.state)}</pre>
        </div>
      </div>
    );
  }
}
