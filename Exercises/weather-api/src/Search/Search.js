import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="input">
          <input type="text" placeholder="Type in city name"></input>
        </div>
        <div className="button">
          <button>FIND WETHER</button>
        </div>
      </div>
    );
  }
}
export default Search;
