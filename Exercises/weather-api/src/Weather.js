import React from "react";

const Weather = props => {
  return (
    <div>
      <div className="main-status">
        <div className="img-main">
          <img src=""></img>
        </div>
        <div className="img-main-status">
          <span>{props.description}</span>
        </div>
        <div className="Temperture">
          <span>Temperture</span> {props.temp_min} C <span> To</span>{" "}
          {props.temp_max} C
        </div>
        <div className="last-span">
          <span>Humidity </span> {props.humidity}
          <span> Pressure </span> {props.pressure}
        </div>
      </div>
      <div className="other-status">
        <div className="status">
          <span>03.00</span>
          <img src=""></img>
          <span>{props.temp3} C</span>
        </div>
        <div className="status">
          <span>06.00</span>
          <img src=""></img>
          <span>{props.temp6} C</span>
        </div>
        <div className="status">
          <span>09.00</span>
          <img src=""></img>
          <span>{props.temp9}C</span>
        </div>
        <div className="status">
          <span>12.00</span>
          <img src=""></img>
          <span>{props.temp12} C</span>
        </div>
        <div className="status">
          <span>15.00</span>
          <img src=""></img>
          <span>{props.temp15} C</span>
        </div>
        <div className="status">
          <span>18.00</span>
          <img src=""></img>
          <span>{props.temp18} C</span>
        </div>
        <div className="status">
          <span>21.00</span>
          <img src=""></img>
          <span>{props.temp21} C</span>
        </div>
      </div>
    </div>
  );
};
export default Weather;
