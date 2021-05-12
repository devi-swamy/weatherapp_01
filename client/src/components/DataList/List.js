import React from "react";
import Listitem from "./_Listitem";

const List = ({ WeatherAppContents }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <Listitem key={key} CurDate={cur.Date}></Listitem>
      ))}
    </div>
  );
};

export default List;
