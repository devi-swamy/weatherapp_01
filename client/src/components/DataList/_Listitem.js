import React from "react";
import { Daysago, weekDays } from "../Constants/Dates";

const _Listitem = ({ CurDate, selected, handleSelectedDayClick, index }) => {
  const today = new Date().getDate();
  return (
    <div>
      <span
        href="#"
        onClick={() => handleSelectedDayClick(index)}
        className={
          " ListItem list-group-item list-group-item-action " +
          (CurDate === today ? "list-group-item-success" : "") +
          (selected ? "active" : "")
        }
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">May {CurDate}</h5>
          <small>{Daysago(CurDate - today)}</small>
        </div>
        <p className="mb-1">
          {/* {
            weekDays[
              (weekDays.length + (new Date().getDate() + CurDate - today)) %
                weekDays.length
            ]
          } */}
          {
            weekDays[
              (weekDays.length + (CurDate - today + new Date().getDay())) %
                weekDays.length
            ]
          }
        </p>

        <small>And some small print.</small>
      </span>
    </div>
  );
};

export default _Listitem;
