import React, { Component } from "react";
import Search from "./Search/Search.js";
import CurrentWeather from "./CurrentWeather/CurrentWeather.js";
import Weatherrest from "./Weatherrest/Weatherrest.js";
import "./App.css";
import FakeWeather from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      humidity: "",
      pressure: ""
    };
  }

  componentDidMount() {
    this.setState({
      description: FakeWeather.list[0].weather[0].description,
      humidity: FakeWeather.list[0].main.humidity,
      pressure: FakeWeather.list[0].main.pressure
    });
  }
  render() {
    return (
      <div className="app-container">
        <Search />
        <div className="main-container">
          <CurrentWeather
            description={this.state.description}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
          />
          <Weatherrest />
        </div>
      </div>
    );
  }
}
export default App;
