import React from "react";
import Listitem from "./_Listitem";

const List = ({ WeatherAppContents, SelectedDay }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <Listitem
          key={key}
          CurDate={cur.Date}
          selected={SelectedDay === key}
        ></Listitem>
      ))}
    </div>
  );
};

export default List;
