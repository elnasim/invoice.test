import React, { useEffect, useState } from "react";

import { useAppContext } from "../AppProvider";
import { Link, useParams } from "react-router-dom";

export default function Buyer() {
  const [buyer, setBuyer] = useState(null);

  const { buyers } = useAppContext();
  let urlParams = useParams();

  useEffect(() => {
    const id = +urlParams.id;
    const buyer = buyers.find((item) => item.id === id);
    setBuyer(buyer);
  }, [buyers, urlParams.id]);

  if (!buyer) return null;

  return (
    <div className="buyer-page">
      <Link to="/buyers">Назад</Link>
      <br />
      <br />
      <div className="buyer-page__item">Имя: {buyer.name}</div>
      <div className="buyer-page__item">Средний чек: {buyer.averageCheck}</div>
      <div className="buyer-page__item">
        Количество покупок: {buyer.numberOfPurchases}
      </div>
      <div className="buyer-page__item">
        Общая выручка: {buyer.totalRevenues}
      </div>
    </div>
  );
}
