import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet/>
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
