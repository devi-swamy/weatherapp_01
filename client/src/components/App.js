import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DataList/List";
import { WeatherAppContents } from "./Constants/Dates";

class App extends Component {
  state = {
    SelectedDay: 3
  };
  render() {
    return (
      <div className="App">
        <Navbar className="Header justify-content-center" dark={true}>
          Weather App
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <List
                WeatherAppContents={WeatherAppContents}
                SelectedDay={this.state.SelectedDay}
              ></List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
