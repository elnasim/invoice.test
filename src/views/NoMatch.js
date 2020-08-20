import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="no-match-page">
      <div>Страница не найдена</div>
      <Link to="/">На главную</Link>
    </div>
  );
}
