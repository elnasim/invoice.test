import React from "react";
import { useAppContext } from "../../AppProvider";
import "./ShowSidebarBtn.scss";

export default function ShowSidebarBtn() {
  const { changeShowsidebar } = useAppContext();

  return (
    <button className="show-sidebar-btn" onClick={changeShowsidebar}>
      <img src='img/adjust.svg' alt="" />
    </button>
  );
}
