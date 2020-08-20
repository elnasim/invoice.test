import React from "react";
import "./BuyersPagination.scss";

export default function BuyersPagination({ perPage, changePage, numOfItems }) {
  const clickHandler = (e, num) => {
    e.preventDefault();
    changePage(num);
  };

  if (perPage === 15) return null;

  const num = Math.ceil(numOfItems / perPage);

  const getPaginationHTML = () => {
    let content = [];
    for (let i = 1; i <= num; i++) {
      content.push(
        <button
          className="pagination__item"
          onClick={(e) => clickHandler(e, i)}
          key={i}
        >
          {i}
        </button>
      );
    }
    return content;
  };

  return <div className="pagination">{getPaginationHTML()}</div>;
}
