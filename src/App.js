import {
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import './App.css';
import React, { Component } from 'react';

import MainPage from './components/MainPage';
import ZipCode from './components/ZipCode';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Make a Reservation!</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/mainpage">Home</Link> </li>
              <li> <Link to="/search">Search</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
            <Link exact path="/"  component={MainPage} />
            <Link path="/search" component={Search} />
            <Link to="/" Component = {MainPage}> MainPage </Link>
        </div>
      </div>
    );
  }
}

export default App;
