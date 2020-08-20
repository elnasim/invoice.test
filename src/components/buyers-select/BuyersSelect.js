import React from "react";
import "./BuyersSelect.scss";

export default function BuyersSelect({ changePerPage }) {
  const changeHandler = (e) => {
    changePerPage(+e.target.value);
  };

  return (
    <div className="select-wrapper">
      Отображать по:
      <select onChange={(e) => changeHandler(e)}>
        <option value="15">15</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
