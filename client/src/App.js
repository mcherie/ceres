import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Home } from "./components/home"
import {AboutMe} from './components/about-me';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <Home />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
