import React, { Component } from "react";
import "./CurrentWeather.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
class CurrentWeather extends Component {
  render() {
    return (
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
    );
  }
}
export default CurrentWeather;
