import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../AppProvider";

import "./Sidebar.scss";

export default function Sidebar() {
  const appContext = useAppContext();

  return (
    <div className="sidebar">
      <img
        src={appContext.userData && appContext.userData.avatar_url}
        className="user-logo"
        alt="logo"
      />

      <nav className="nav">
        <Link className="nav__link" to="/terminals">
          terminals
        </Link>

        <Link className="nav__link" to="/buyers">
          buyers
        </Link>
      </nav>
    </div>
  );
}
