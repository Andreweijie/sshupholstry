import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import Landing from "./components/Landing";

import { Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img></img>
          <nav className="links">
            <Link to="/">About</Link>
            <Link to="/gallery">Gallery</Link>
            <a>Services</a>
            <a>Contact</a>
          </nav>
        </div>
        <Route exact path="/gallery" component={Images}></Route>
        <Route exact path="/" component={Landing}></Route>
        <footer>
          designed by andreweijie|<a>privacy policy</a>
        </footer>
      </div>
    );
  }
}

export default App;
