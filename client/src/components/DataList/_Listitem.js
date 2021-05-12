import React from "react";

const _Listitem = ({ CurDate }) => {
  return (
    <div>
      <a
        href="#"
        className={
          "list-group-item list-group-item-action " +
          (CurDate === new Date().getDate() ? "active" : "")
        }
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">May {CurDate}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1"></p>
        <small>And some small print.</small>
      </a>
    </div>
  );
};

export default _Listitem;
