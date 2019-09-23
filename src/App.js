import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Count from '../src/components/count'


function App() {
  return (
    <Router>
      <Route path="/count" component={Count} exact/>
    </Router>
  );
}

export default App;
