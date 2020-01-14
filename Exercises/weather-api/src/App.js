import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <div className="header-container">
          <div className="input">
            <input type="text" placeholder="Type in city name"></input>
          </div>
          <div className="button">
            <button>FIND WETHER</button>
          </div>
        </div>
        <div className="main-container">
          <div className="main-status">
            <div className="img-main">
              <img src={storm}></img>
            </div>
            <div className="img-main-status">
              <span>overcast clouds</span>
            </div>
            <div className="Temperture">
              <span>Temperture</span> 10 C <span> To</span> 11 C
            </div>
            <div className="last-span">
              <span>Humidity </span> 70%<span> Pressure </span> 100.48
            </div>
          </div>
          <div className="other-status">
            <div className="status">
              <span>03.00</span>
              <img src={storm}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={clear}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={clear}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={clear}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={clear}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={storm}></img>
              <span>6 C</span>
            </div>
            <div className="status">
              <span>03.00</span>
              <img src={storm}></img>
              <span>6 C</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
