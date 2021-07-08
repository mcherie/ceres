import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from'react-router-dom';
import { SaveTheDate } from './components/save-the-date';
import { Homepage } from './components/homepage/homepage';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
      <Route path="/save-the-date" component={SaveTheDate}/>
    </Router>
  );
}

export default App;
