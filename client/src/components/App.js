import React from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DataList/List";
import { WeatherAppContents } from "./Constants/Dates";

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
