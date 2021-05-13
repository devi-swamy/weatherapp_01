import React from "react";
import { Daysago } from "../Constants/Dates";

const _Listitem = ({ CurDate }) => {
  const today = new Date().getDate();
  return (
    <div>
      <a
        href="#"
        className={
          "list-group-item list-group-item-action " +
          (CurDate === today ? "active" : "")
        }
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">May {CurDate}</h5>
          <small>{Daysago(CurDate - today)}</small>
        </div>
        <p className="mb-1"></p>
        <small>And some small print.</small>
      </a>
    </div>
  );
};

export default _Listitem;
