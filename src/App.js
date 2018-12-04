import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Header'

class App extends Component {
  render() {
    return ( 
    <Router>
      <Route exact path="/" component={Header}/>
      
    </Router>
   );
  }
}

export default App;
