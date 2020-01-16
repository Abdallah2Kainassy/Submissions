import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <div className="header-container">
        <div className="input">
          <input
            type="text"
            placeholder="Type in city name"
            name="city"
          ></input>
        </div>
        <div className="button">
          <button>FIND WETHER</button>
        </div>
      </div>
    </form>
  );
};
export default Form;
