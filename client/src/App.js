import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Home } from "./components/home"
import {AboutMe} from './components/about-me';
import { Portfolio } from "./components/portfolio"
import { Navbar } from "./components/navbar"
import {ContactMe} from './components/contact-me';
import { Resume } from "./components/resume"

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
        <Navbar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Resume />
        <ContactMe />s
      </header>
    </div>
  );
}

export default App;
