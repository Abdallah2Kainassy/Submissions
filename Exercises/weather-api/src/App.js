import React, { Component } from "react";
import Search from "./Search/Search.js";
import CurrentWeather from "./CurrentWeather/CurrentWeather.js";
import Weatherrest from "./Weatherrest/Weatherrest.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <Search />
        <div className="main-container">
          <CurrentWeather />
          <Weatherrest />
        </div>
      </div>
    );
  }
}
export default App;
