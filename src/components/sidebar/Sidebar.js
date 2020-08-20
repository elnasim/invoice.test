import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../AppProvider";

import "./Sidebar.scss";

export default function Sidebar() {
  const appContext = useAppContext();

  useEffect(() => {
    console.log("render sidebar");
  }, []);

  let className = "sidebar";
  if (appContext.isShowSidebar) {
    className += " show";
  }

  return (
    <div className={className}>
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

      <footer className="footer">Copyright © 2020 </footer>
    </div>
  );
}
