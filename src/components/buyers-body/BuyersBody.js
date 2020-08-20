import React from "react";
import { Link } from "react-router-dom";

import "./BuyersBody.scss";

export default function BuyersBody({ buyers, sortBuyers }) {
  const clickHandler = (columnName) => {
    sortBuyers(columnName);
  };

  return (
    <table className="buyers-body">
      <thead>
        <tr>
          <td>ID</td>
          <td onClick={() => clickHandler("name")}>Имя</td>
          <td onClick={() => clickHandler("averageCheck")}>Средний чек</td>
          <td onClick={() => clickHandler("numberOfPurchases")}>
            Количество покупок
          </td>
          <td onClick={() => clickHandler("totalRevenues")}>Общая выручка</td>
        </tr>
      </thead>
      <tbody>
        {buyers.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <Link to={'/buyers/' + item.id}>{item.id}</Link>
              </td>
              <td>{item.name}</td>
              <td>{item.averageCheck}</td>
              <td>{item.numberOfPurchases}</td>
              <td>{item.totalRevenues}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
