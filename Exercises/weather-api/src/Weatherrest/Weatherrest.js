import React, { Component } from "react";
import "./Weatherrest.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
class Weatherrest extends Component {
  render() {
    return (
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
    );
  }
}
export default Weatherrest;
