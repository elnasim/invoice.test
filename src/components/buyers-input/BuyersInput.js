import React, { useState } from "react";
import "./BuyersInput.scss";

export default function BuyersInput({ filterBuyers }) {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    filterBuyers(e.target.value);
  };

  return (
    <input
      className="buyers-input"
      type="text"
      placeholder="Введите имя для фильтра"
      onChange={(e) => inputHandler(e)}
      value={input}
    />
  );
}
