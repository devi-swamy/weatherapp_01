import React from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DataList/List";
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const WeatherAppContents = [
  {
    Date: 5
  },
  {
    Date: 6
  },
  {
    Date: 7
  },
  {
    Date: 8
  },
  {
    Date: 9
  },
  {
    Date: 10
  },
  {
    Date: 11
  },
  {
    Date: 12
  },
  {
    Date: 13
  }
];

const App = () => {
  return (
    <div className="App">
      <Navbar className="Header justify-content-center" dark={true}>
        Weather App
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <List WeatherAppContents={WeatherAppContents}></List>
          </div>
        </div>
      </div>

      {/* <Navbar>Light</Navbar>
      <Navbar dark="true">Dark</Navbar>
      <Navbar>Light</Navbar>
      <Navbar dark={true}>Dark</Navbar> */}
    </div>
  );
};

export default App;
