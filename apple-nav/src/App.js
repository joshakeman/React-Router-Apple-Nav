import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import navs from './data'
import NavWrapper from './components/NavWrapper'

class App extends Component {
  constructor() {
    super()
    this.state = {
      navs: navs
    }
  }
  render() {
    return (
      <div className="App">
      <ul className="navbar">
        <NavWrapper navs={this.state.navs}></NavWrapper>
      </ul>
      </div>
    );
  }
}

export default App;
