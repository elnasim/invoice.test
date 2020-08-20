import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAppContext } from "../AppProvider";

import Sidebar from "../components/sidebar/Sidebar";

import "./MainLayout.scss";

export default function MainLayout({ children }) {
  const history = useHistory();
  const appContext = useAppContext();

  useEffect(() => {
    console.log("main layout render");
    // if (!appContext.userData) history.push("/");
  }, [appContext.userData, history]);

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="layout-body">{children}</div>
    </div>
  );
}
