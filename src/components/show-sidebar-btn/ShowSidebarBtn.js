import React from "react";
import { useAppContext } from "../../AppProvider";
import "./ShowSidebarBtn.scss";
import icon from "../../assets/img/adjust.svg";

export default function ShowSidebarBtn() {
  const { changeShowsidebar } = useAppContext();

  return (
    <button className="show-sidebar-btn" onClick={changeShowsidebar}>
      <img src={icon} alt="" />
    </button>
  );
}
