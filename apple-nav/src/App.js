import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import navs from './data'
import NavWrapper from './components/NavWrapper'
import SubNav from './components/SubNav'
import Nav from './components/Nav'

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
        <div className="navbar">
          <NavWrapper navs={this.state.navs}></NavWrapper>
        </div>
        <Route path="/:category" render={props => <SubNav {...props} data={this.state.navs}/>}/>
      </div>
    );
  }
}

export default App;
