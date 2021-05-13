import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DataList/List";
import { WeatherAppContents } from "./Constants/Dates";

class App extends Component {
  state = {
    SelectedDay: -1
  };
  handleSelectedDayChange = e => {
    this.setState({
      SelectedDay: e.target.value
    });
  };

  handleSelectedDayClick = e => {
    this.setState({
      SelectedDay: e.target.value
    });
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
            <div className="col-8">
              <form action="">
                <div className="form-group">
                  <label htmlFor="dateSelected">Select a Day</label>
                  <select
                    id="dateSelected"
                    className="form-control"
                    value={this.state.SelectedDay}
                    onChange={this.handleSelectedDayChange}
                    onClick={this.handleSelectedDayClick()}
                  >
                    <option value={null} disabled>
                      Please Select ...{" "}
                    </option>
                    {WeatherAppContents.map((date, key) => (
                      <option value={key} key={key}>
                        May {date.Date}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
