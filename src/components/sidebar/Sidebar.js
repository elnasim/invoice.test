import React, { useEffect } from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  useEffect(() => {
    console.log("123");
  }, []);

  return <div>Sidebar</div>;
}
