import React from "react";
import Listitem from "./_Listitem";

const List = ({ WeatherAppContents, SelectedDay, handleSelectedDayClick }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <Listitem
          key={key}
          index={key}
          CurDate={cur.Date}
          selected={+SelectedDay === key}
          handleSelectedDayClick={handleSelectedDayClick}
        ></Listitem>
      ))}
    </div>
  );
};

export default List;
