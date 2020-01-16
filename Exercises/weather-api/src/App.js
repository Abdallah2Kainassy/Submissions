import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      humidity: "",
      pressure: "",
      temp_min: "",
      temp_max: "",
      error: ""
    };
  }
  getWeather = async e => {
    e.preventDefault();
    const api_key = "adf798bcc8acd2218411b98779b7b796";
    const city = e.target.elements.city.value;

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${api_key}`
    );
    const data = await api.json();
    console.log(data);

    if (city) {
      this.setState({
        id: data.list[0].weather[0].id,
        description: data.list[5].weather[0].description,
        humidity: data.list[5].main.humidity,
        pressure: data.list[5].main.pressure,
        temp_min: data.list[5].main.temp_min,
        temp_max: data.list[5].main.temp_max,
        temp3: data.list[6].main.temp,
        temp6: data.list[7].main.temp,
        temp9: data.list[0].main.temp,
        temp12: data.list[4].main.temp,
        temp15: data.list[3].main.temp,
        temp18: data.list[2].main.temp,
        temp21: data.list[1].main.temp,
        error: ""
      });
    } else {
      this.setState({
        description: "",
        humidity: "",
        pressure: "",
        temp_min: "",
        temp_max: "",
        error: "Please Enter City !!!!"
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <Form getWeather={this.getWeather} />

        <div className="main-container">
          <Weather
            description={this.state.description}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            temp3={this.state.temp3}
            temp6={this.state.temp6}
            temp9={this.state.temp9}
            temp12={this.state.temp12}
            temp15={this.state.temp15}
            temp18={this.state.temp18}
            temp21={this.state.temp21}
          />
        </div>
      </div>
    );
  }
}
export default App;
